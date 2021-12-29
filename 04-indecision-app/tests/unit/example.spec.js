
describe('Example Component', ()=>{

  test('Debe de ser mayor a 10', ()=>{

    let value = 5;

    value = value + 9;

    expect(value).toBeGreaterThan(10)

  })

})
