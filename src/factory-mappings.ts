import { Deployment } from "../generated/TransmutationFactory/TransmutationFactory";
import { TransmutationTemplate } from "../generated/templates";
import { Transmutation } from "../generated/schema";

// emit Deployment(
//   _moloch,
//   _distributionToken,
//   minion,
//   transmutation,
//   trust
// );
export function handleTransmutationDeployment(event: Deployment): void {
  let transmutation = Transmutation.load(event.params.transmutation.toHex());

  if (transmutation == null) {
    transmutation = new Transmutation(event.params.transmutation.toHex());
  }

  transmutation.moloch = event.params.moloch;
  transmutation.distributionToken = event.params.distributionToken;
  transmutation.minion = event.params.minion;
  transmutation.transmutation = event.params.transmutation;
  transmutation.trust = event.params.trust;

  transmutation.save();

  TransmutationTemplate.create(event.params.transmutation);
}
