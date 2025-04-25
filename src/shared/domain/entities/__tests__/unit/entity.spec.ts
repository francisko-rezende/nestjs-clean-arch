import { Entity } from '../../entity'

type StubProps = {
  prop1: string
  prop2: number
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = { prop1: 'value 1', prop2: 42 }
    const entity = new StubEntity(props)

    expect(entity.props).toStrictEqual(props)
    expect(entity.id).not.toBeNull()

    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    expect(entity.id).toMatch(uuidV4Regex)
  })

  it('should accept a valid uuid', () => {
    const props = { prop1: 'value 1', prop2: 42 }
    const uuid = '30df373e-0346-409c-9747-a809244c9ffa'
    const entity = new StubEntity(props, uuid)

    const uuidV4Regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    expect(entity.id).toMatch(uuidV4Regex)
    expect(entity.id).toBe(uuid)
  })

  it('should convert an entity to a js object', () => {
    const props = { prop1: 'value 1', prop2: 42 }
    const uuid = '30df373e-0346-409c-9747-a809244c9ffa'
    const entity = new StubEntity(props, uuid)

    const expectedJSON = { id: uuid, ...props }

    expect(entity.toJSON()).toStrictEqual(expectedJSON)
  })
})
