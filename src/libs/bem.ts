import bemBlock, { BemMods } from 'bem-cn';

const block = (blockName: string) => {
    const bemFn = bemBlock(blockName);
    console.log(blockName);
    return (...props: (string | BemMods)[]) => bemFn(...props).toString();
};

export default block;
