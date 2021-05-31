const {sum,mul,div,sub,arr,compileAndroidCode,reMock,Users}=require("./../scripts/index");
/* 
* https://jestjs.io/docs/using-matchers
* https://github.com/sapegin/jest-cheat-sheet
*/
describe('index', () => {
   /*
    test.skip('sum', () => {
        expect(sum(1,1)).toBe(2)
    });
    
    it.only('sum2', () => {
        expect(sum(1,1)).toBe(2)
    });
    it('sum4', () => {
        expect(sum(1,1)).toBe(2)
    });
    */
   /*
    beforeAll(() => {
        console.log('before all test')
    });
    
    beforeEach(() => {
        console.log('before Each test')
    });

    afterAll(() => {
        console.log('after all test')
    });
    
    afterEach(() => {
        console.log('after Each test')
    });*/
    
    test('sum', () => {
        expect(sum(1,1)).toBe(2)
    });
    
    test('mul', () => {
        expect(mul(1,1)).toBe(1)
    });
    
    test('div', () => {
        expect(div(2,1)).toBe(2)
    });
    
    test('sub', () => {
        expect(sub(1,1)).toBe(0)
    });
    
    // ! Matchers match method
    // ~ not
    test('array Equal ', () => {
        expect([1,2]).not.toEqual([4,25])
    })
    // ~ array
    test('array length', () => {
        expect(arr.length).toBe(6)
    });
    test('array length 2', () => {
        expect(arr).toHaveLength(6)
    });
    
    test('array have 3', () => {
        expect(arr).toContain(3)
    });
    test('array Equal ', () => {
        expect([1,2]).toEqual([1,2])
    })
    
    // ~ null
    test('null', () => {
        const n = null;
        expect(n).toBeNull();
      });
    // ~ Numbers

    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3);
        expect(value).toBeLessThan(5);
        expect(value).toBe(4);
        expect(value).toEqual(4);
      });

    // ~ Strings
    test('but there is a "stop" in Christoph', () => {
        expect('abcd').toMatch(/^[A-z]{4}$/);
      });

    // ~ Exceptions
    test('compiling android goes as expected', () => {
        expect(()=>compileAndroidCode()).toThrow();
        expect(()=>compileAndroidCode()).toThrow(Error);
        expect(()=>compileAndroidCode()).toThrow('you are using the wrong message');
      });
    // ~ object 
    test('obj', () => {
        const obj = { a: 'foo', b: 'bar', c: 'baz' };
        expect(obj).toHaveProperty('a');
        expect(obj).toHaveProperty('b');
        expect(obj).toHaveProperty('c');
        expect(obj).not.toHaveProperty('d');
      });
      
    // ~ undefined
    test('undefined', () => {
        let x;
        expect(x).toBeUndefined()
    });
    // ~ boolean
    test('boolean false 0', () => {
        expect(0).toBeFalsy()
    });
    test('boolean false false', () => {
        expect(false).toBeFalsy()
    });
    test('boolean true 1', () => {
        expect(1).toBeTruthy()
    });
    test('boolean true true', () => {
        expect(true).toBeTruthy()
    });
    // ~ any thing 
    test('any thing', () => {
        // any thing with out null undefined
        expect(1).toEqual(expect.anything())
        expect('any thing').toEqual(expect.anything())
    });
    // ~ any 
    test('any ', () => {
        // any is (type)
        expect(1).toEqual(expect.any(Number))
        expect('1').toEqual(expect.any(String))
    });

    // ? mock test behavior
    test('mock', () => {
        const mocker = jest.fn((v)=> reMock(v));
        expect(mocker('hello')).toBe('hello hello');
        expect(mocker('hello2')).toBe('hello hello2');
        expect(mocker('hello4')).toBe('hello hello4');
        expect(mocker('hello3')).toBe('hello hello3');
        expect(mocker).toHaveBeenCalled();
        expect(mocker).toHaveBeenCalledTimes(4);
        expect(mocker).toHaveBeenCalledWith('hello');
        expect(mocker).toHaveBeenCalledWith('hello2');
        expect(mocker).toHaveBeenCalledWith('hello3');
        expect(mocker).toHaveBeenCalledWith('hello4');
        expect(mocker).not.toHaveBeenCalledWith('hello5');
    });


  //  ^ coverage
  // ! npm run test -- --coverage
  /* 
    ~ package.json
    "jest":{
    "collectCoverage":true
    }
  */
 test('should api',() => {
    
       Users().then(data => {
        expect(data.title).toBe('delectus aut autem');
      },err=>{
          // error
        expect(err).toBe('delectus aut autem');
      });

 });
});