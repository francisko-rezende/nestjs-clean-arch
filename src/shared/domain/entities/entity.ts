import { randomUUID } from 'node:crypto'

export abstract class Entity<TProps> {
  public readonly _id: string
  public readonly props: TProps

  constructor(props: TProps, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  get id() {
    return this._id
  }

  toJSON(): Required<{ id: string } & TProps> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & TProps>
  }
}
