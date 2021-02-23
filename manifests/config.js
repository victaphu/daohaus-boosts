module.exports.config = {
  kovan: {
    dataSources: [
      {
        name: "transmutation",
        template: "transmutation-ds.yaml",
        address: "0x46A8E5b4B15b81b14AFf10Ac220c5A7B13E8282A",
        startBlock: 20544190,
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
        factory: "0x2BE7130DF2Ba6822464900cBD818BcDB8cf73d09",
        startBlock: 11814810,
        template: "transmutation-ds.yaml",
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
