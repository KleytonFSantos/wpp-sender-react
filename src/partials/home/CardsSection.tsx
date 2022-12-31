import { Card } from "../../components/global/Card";

export const CardsSection = () => {
  return (
    <div className="flex flex-row gap-10">
      <Card
        link="create-message"
        title="Nova Mensagem"
        description="Clique aqui para agendar uma nova mensagem"
      />
      <Card
        link="messages"
        title="Todas as Mensagens"
        description="Clique aqui para visualizar as mensagens existentes"
      />
    </div>
  );
};
