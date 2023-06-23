import { VendingMachine } from "./VendingMachine"

describe('tset', () => {
  const vendingMachine = new VendingMachine()
  it('True', () =>{
    expect(vendingMachine.test()).toBeTruthy()
  })
  it('False', () =>{
    expect(vendingMachine.test()).toBeFalsy()
  })
})