import React from 'react';
import { X, Check, Sparkles, HelpCircle } from 'lucide-react';
import styles from './Comparison.module.scss';

export const Comparison: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Controle de Validade dos Alimentos',
      without: 'Alimentos esquecidos no fundo do armário que vencem e vão direto para o lixo.',
      withApp: 'Alertas automáticos proativos no celular dias antes de qualquer item vencer.',
    },
    {
      feature: 'Cadastro de Compras',
      without: 'Digitar produto por produto ou simplesmente não anotar nada.',
      withApp: 'Importação automática em 5 segundos escaneando o QR Code da NFC-e ou código de barras.',
    },
    {
      feature: 'Criação da Lista de Compras',
      without: 'Fazer lista de cabeça na hora de sair, esquecendo itens essenciais.',
      withApp: 'Lista que se monta sozinha no momento exato em que um produto acaba na despensa.',
    },
    {
      feature: 'Colaboração entre Moradores',
      without: 'Mensagens soltas no WhatsApp e compras duplicadas do mesmo item no mesmo dia.',
      withApp: 'Despensa compartilhada com sincronização em tempo real e marcação de quem comprou.',
    },
    {
      feature: 'Análise de Gastos e Preços',
      without: 'Sensação de que o dinheiro sumiu no supermercado sem saber onde.',
      withApp: 'Dashboards completos com gráficos de consumo por categoria e variação de preços.',
    },
    {
      feature: 'Comparação de Embalagens na Prateleira',
      without: 'Dúvida se a embalagem econômica realmente compensa ou é pegadinha.',
      withApp: 'Calculadora integrada de preço por kg, litro e unidade direto no aplicativo.',
    },
  ];

  return (
    <section className={styles.compSection}>
      <div className={`container ${styles.compContainer}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionPill}>
            <Sparkles size={14} /> Comparativo Direto
          </span>
          <h2 className={styles.sectionTitle}>
            Por que adotar o FaltaOquê? na sua casa
          </h2>
          <p className={styles.sectionSubtitle}>
            Veja a diferença de gerenciar sua rotina de supermercado com tecnologia
            versus os métodos tradicionais de papel e mensagens perdidas.
          </p>
        </div>

        <div className={styles.tableWrapper}>
          <div className={styles.tableHeader}>
            <div className={styles.headerFeature}>Critério</div>
            <div className={styles.headerWithout}>
              <div className={styles.headerIconRed}>
                <X size={18} />
              </div>
              <span>Sem o FaltaOquê?</span>
            </div>
            <div className={styles.headerWith}>
              <div className={styles.headerIconGreen}>
                <Check size={18} />
              </div>
              <span>Com o FaltaOquê?</span>
            </div>
          </div>

          <div className={styles.tableBody}>
            {comparisonItems.map((item, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.cellFeature}>
                  <strong>{item.feature}</strong>
                </div>
                <div className={styles.cellWithout}>
                  <div className={styles.statusIndicatorRed}>
                    <X size={14} />
                  </div>
                  <span>{item.without}</span>
                </div>
                <div className={styles.cellWith}>
                  <div className={styles.statusIndicatorGreen}>
                    <Check size={14} />
                  </div>
                  <span>{item.withApp}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
