import "./SuccessfulPurchase.css"

export default function SuccessfulPurchase() {
    return (
        <section className="successful-purchase">
            <div className="success-message">
                <p>Pedido feito </p>
                <p> com sucesso!</p>
            </div>
            <PurchaseInformation title = "Filme e sessão" firstInfo = "Enola Holmes" secondInfo ="24/06/2021 - 15:00" />
            <PurchaseInformation title = "Ingressos" firstInfo = "Assento 15" secondInfo = "Assento 16" />
            <PurchaseInformation title = "Comprador" firstInfo = "Nome: João da Silva Sauro" secondInfo ="CPF: 123.465.789-10" />
            <button className="return-home">
                Voltar pra Home
            </button>
        </section>
    );
}

function PurchaseInformation({title, firstInfo, secondInfo}){
    return (
        <div className="purchase-information">
            <p className="title">
                {title}
            </p>
            <p>
                {firstInfo} 
            </p>
            <p>
                {secondInfo}
            </p>
        </div>
    );
}

