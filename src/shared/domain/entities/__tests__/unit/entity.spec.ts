import { validate as uuidValidate } from 'uuid'
import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity Unit Test', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 1}
    const entity = new StubEntity(props)
    expect(entity.props).toStrictEqual(props)
    expect(entity._id).not.toBeNull()
  })

  it('Id should be a valid uuid', () => {
    const entity = new StubEntity({ prop1: 'value1', prop2: 1})
    expect(uuidValidate(entity._id)).toBeTruthy()
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 1}
    const id = '7abb0e7f-c2cc-45da-8af6-be8cd1afe17e'
    const entity = new StubEntity(props, id)
    expect(uuidValidate(entity._id)).toBeTruthy()
    expect(entity._id).toBe(id)
  })

  it('Should convert a entity to a JavaScript Object', () => {
    const props = { prop1: 'value1', prop2: 1}
    const id = '7abb0e7f-c2cc-45da-8af6-be8cd1afe17e'
    const entity = new StubEntity(props, id)
    expect(entity.toJSON()).toStrictEqual({id, ...props})
  })
})