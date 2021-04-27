module.exports.config = {
  kovan: {
    dataSources: [
      {
        name: "transmutation",
        template: "transmutation-ds.yaml",
        address: "0x46A8E5b4B15b81b14AFf10Ac220c5A7B13E8282A",
        startBlock: 20544190,
      },
      {
        name: "transmutationV2",
        template: "transmutationV2-ds.yaml",
        address: "0xbca622291fFe797C77a8Bc6D000584b22877e971",
        startBlock: 23758392,
      },
    ],
    templates: [
      {
        name: "transmutation",
        template: "transmutation-template.yaml",
      },
    ],
  },
  xdai: {
    dataSources: [
      {
        name: "transmutation",
        template: "transmutation-ds.yaml",
        address: "0x2BE7130DF2Ba6822464900cBD818BcDB8cf73d09",
        startBlock: 11814810,
      },
      {
        name: "transmutationV2",
        template: "transmutationV2-ds.yaml",
        address: "0x7F94ec015665743fE84A7f59297eD86A0470e069",
        startBlock: 14846276,
      },
      {
        name: "wrapNZap",
        template: "wrapNZap-ds.yaml",
        address: "0x8464135c8F25Da09e49BC8782676a84730C318bC",
        startBlock: 15518416,
      },
    ],
    templates: [
      {
        name: "transmutation",
        template: "transmutation-template.yaml",
      },
    ],
  },
};
