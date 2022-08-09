import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { compute, greet} from "./app.component";

describe('AppComponent', () => {

  it('should return zero if input is negative. ', ()=> {
    const result = compute(-1)
    expect(result).toBe(0);
  })

  it('Should return plus one if number is positive', ()=>{
    const result = compute(1)
    expect(result).toBeTruthy()
    expect(result).toBeGreaterThan(0)
  })

  it('should be greater than zero', function () {
    const result = compute(5)
    expect(result).toBeGreaterThan(0)
  });

  it('should be 2 if input is 1', function () {
    const result = compute(1)
    expect(result).toEqual(2)
  });
});

describe('Testing greed function ', ()=>{
  it('should contain user name', ()=> {
    const result = greet('Adam')
    expect(result).toContain('Adam')
  })

  it('should contain deeply user name + welcome msg', ()=> {
    const result = greet('Adam')
    expect(result).toEqual('Welcome Adam')
  })

  it('value should be thurhy', ()=> {
    const result = greet('Adam')
    expect(result).toBeTruthy()
  })
})
