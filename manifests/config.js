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
        address: "0x235320BEfFB2c3ca8f4b2b428dF7b740009cF16c",
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
        address: "0xf88eaD028100529a540122456A68CA3ca416ccA3",
        startBlock: 14846276,
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
