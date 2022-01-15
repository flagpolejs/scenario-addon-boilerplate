import { iScenario, ProtoScenario } from "flagpole";
import { SampleAdapter } from "./example-adapter";
import { ExampleResponse } from "./example-response";

export class ExampleScenario extends ProtoScenario implements iScenario {
  public readonly requestAdapter = SampleAdapter;
  public readonly response = new ExampleResponse(this);
}
