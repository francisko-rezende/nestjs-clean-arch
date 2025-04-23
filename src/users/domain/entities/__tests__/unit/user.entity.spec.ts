import { userDataBuilder } from '@/users/domain/testing/helpers/user-data-builder'
import { UserEntity, UserProps } from '../../user.entity'

describe('UserEntity unit tests', () => {
  let props: UserProps
  let sut: UserEntity

  beforeEach(() => {
    props = userDataBuilder({})

    sut = new UserEntity(props)
  })

  it('should have a working constructor method', () => {
    expect(sut.props.name).toEqual(props.name)
    expect(sut.props.email).toEqual(props.email)
    expect(sut.props.password).toEqual(props.password)
    expect(sut.props.createdAt).toBeInstanceOf(Date)
  })

  it('should return correct values via getters', () => {
    expect(sut.name).toBe(props.name)
    expect(sut.email).toBe(props.email)
    expect(sut.password).toBe(props.password)
    expect(sut.createdAt).toBeInstanceOf(Date)
  })
})
