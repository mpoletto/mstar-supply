function ProductRegistryRow({ registro }) {
    return (
        <tr>
        <th colSpan="2">
            {registro}
        </th>
        </tr>
    );
}

function ProductRow({ product }) {
    return (
        <tr>
        <td>{product.nome}</td>
        <td>{product.fabricante}</td>
        </tr>
    );
}

function GoodsTable({ goods }) {
    const rows = [];
    let lastRegistry = null;

    goods.forEach((product) => {
        if (product.registro !== lastRegistry) {
        rows.push(
            <ProductRegistryRow
            registro={product.registro}
            key={product.registro} />
        );
        }
        rows.push(
        <ProductRow
            product={product}
            key={product.nome} />
        );
        lastRegistry = product.registro;
    });

    return (
        <table>
        <thead>
            <tr>
            <th>Registro</th>
            <th>Nome</th>
            <th>Fabricante</th>
            <th>Tipo</th>
            <th>Descrição</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar() {
    return (
        <form>
        <input type="text" placeholder="Search..." />
        <label>
            <input type="checkbox" />
            {' '}
            Only show goods in stock
        </label>
        </form>
    );
}

function FilterableGoodsTable({ goods }) {
    return (
        <div>
        <SearchBar />
        <GoodsTable goods={goods} />
        </div>
    );
}

const GOODS = [
    {"registro": "1", "nome": "Action", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Parceria com Albermale, tecnologia de zeólita - gasolina para GLP." },
    {"registro": "2", "nome": "AFX", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Parceria com Albermale, alto rendimento de propeno." },
    {"registro": "3", "nome": "AMBER", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Para refinadores de gasóleo, proporciona máxima produção de gasolina e destilados médios." },
    {"registro": "4", "nome": "Denali", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Parceria com Albermale, liderança no rendimento de butenos. Tecnologia GRANITE." },
    {"registro": "5", "nome": "Everest", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Parceria com Albermale, alto rendimento de butenos e octanagem. Tecnologia GRANITE." },
    {"registro": "6", "nome": "Ruby", "fabricante": "FCCSA", "tipo": "catalisador", "descricao": "Parceria com Albermale, seletividade a nafta/LCO e maior octanagem." }
];

export default function Mercadoria() {
    return <FilterableGoodsTable goods={GOODS} />;
}