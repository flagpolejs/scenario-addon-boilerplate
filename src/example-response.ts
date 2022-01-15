import {
  HttpResponse,
  iResponse,
  iValue,
  ProtoResponse,
  Value,
  ValuePromise,
} from "flagpole";

export class ExampleResponse extends ProtoResponse implements iResponse {
  public get responseTypeName(): string {
    return "Sample";
  }

  public init(httpResponse: HttpResponse) {
    super.init(httpResponse);
    this.context.assert(httpResponse.body).length.greaterThan(0);
  }

  public find(path: string): ValuePromise {
    return ValuePromise.wrap(new Value("foobar", this.context, path));
  }

  public async findAll(path: string): Promise<iValue[]> {
    return [
      new Value("foo", this.context, path),
      new Value("bar", this.context, path),
    ];
  }
}
