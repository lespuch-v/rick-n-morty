import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import {Object3D} from 'three';
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";


@Component({
  selector: 'app-ship-object',
  templateUrl: './ship-object.component.html',
  styleUrls: ['./ship-object.component.css']
})
export class ShipObjectComponent implements OnInit {

  // Cube Properties
  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = 'assets/textures/stone/stone_wall_diff_2k.jpg';
  // Stage Properties and Methods (private)
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input("nearClipping") public nearClippingPlane: number = 1;
  @Input("farClipping") public farClippingPlane: number = 1000;
  // Create the renderer and add it to the DOM
  @ViewChild("canvas") private canvasRef: ElementRef<HTMLCanvasElement> | undefined;
  // Helper Properties (Private Properties) and Methods
  private camera!: THREE.PerspectiveCamera;
  private loader = new THREE.TextureLoader();
  private loaderGLTF = new GLTFLoader();
  private model!: Object3D;
  private ambientLight!: THREE.AmbientLight;
  private directionalLight!: THREE.DirectionalLight;
  private light1!: THREE.PointLight;
  private light2!: THREE.PointLight;
  private light3!: THREE.PointLight;
  private light4!: THREE.PointLight;
  private controls!: OrbitControls;
  private material = new THREE.MeshBasicMaterial({map: this.loader.load(this.texture)});
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene; // this method is called by the Angular framework when the component is destroyed

  constructor() {
  }

  private get canvas(): HTMLCanvasElement {
    return <HTMLCanvasElement>this.canvasRef?.nativeElement;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRendering();
    this.createControls();
  }

  // Create the scene
  private createScene(): void {
    // Create the scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#ffffff');
    this.loaderGLTF.load('assets/model/ship.glb', (gltf: GLTF) => {
      this.model = gltf.scene.children[0];
      var box = new THREE.Box3().setFromObject(this.model);
      box.getCenter(this.model.position);
      this.model.position.multiplyScalar(-1);
      setInterval(() => {
        this.model.rotation.y += .01;
      }, 30);
      this.scene.add(this.model);
    });
    // Create the camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(this.fieldOfView, aspectRatio, this.nearClippingPlane, this.farClippingPlane);
    this.camera.position.x = 100;
    this.camera.position.y = 80;
    this.camera.position.z = 220;
    this.ambientLight = new THREE.AmbientLight(0x00000, 0.4);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffdf04, 0.4);
    this.directionalLight.position.set(0, 1, 0);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0x4b371c, 10);
    this.light1.position.set(0, 200, 400);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0x4b371c, 10);
    this.light2.position.set(500, 100, 0);
    this.scene.add(this.light2);
    this.light3 = new THREE.PointLight(0x4b371c, 10);
    this.light3.position.set(0, 100, -500);
    this.scene.add(this.light3);
    this.light4 = new THREE.PointLight(0x4b371c, 10);
    this.light4.position.set(-500, 300, 500);
    this.scene.add(this.light4);
  }

  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private createControls(): void {
    const renderer = new CSS2DRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(600, 600);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    renderer.domElement.style.left = '0px';
    renderer.domElement.style.backgroundColor = 'red'
    // document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = true;
    this.controls.update();
  }

  private animateShip(): void {
    // this.cube.rotation.x += this.rotationSpeedX;
    // this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRendering(): void {
    // Render the scene
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.renderer.setPixelRatio(window.devicePixelRatio); // this line is needed to make the canvas responsive
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: ShipObjectComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateShip();
      component.renderer.render(component.scene, component.camera);
    }());
  }
}
