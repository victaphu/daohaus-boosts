import { Deploy } from "../generated/templates/TransmutationTemplate/Transmutation";
import { Transmutation } from "../generated/schema";

// event Deploy(
//   address moloch,
//   address giveToken,
//   address getToken,
//   address owner
// );
export function handleDeploy(event: Deploy): void {
  let transmutation = Transmutation.load(event.address.toHex());
  transmutation.giveToken = event.params.giveToken;
  transmutation.getToken = event.params.getToken;
  transmutation.save();
}
