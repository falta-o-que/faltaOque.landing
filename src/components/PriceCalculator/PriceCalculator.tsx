'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Scale,
  Sparkles,
  ArrowRight,
  TrendingDown,
  CheckCircle2,
  DollarSign,
  HelpCircle,
  PiggyBank
} from 'lucide-react';
import styles from './PriceCalculator.module.scss';

export const PriceCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'unit' | 'savings'>('unit');

  // Option A state
  const [productAName, setProductAName] = useState('Embalagem Padrão');
  const [productAWeight, setProductAWeight] = useState<number>(500);
  const [productAUnit, setProductAUnit] = useState<'g' | 'kg' | 'ml' | 'l' | 'un'>('g');
  const [productAPrice, setProductAPrice] = useState<number>(18.5);

  // Option B state
  const [productBName, setProductBName] = useState('Embalagem Econômica');
  const [productBWeight, setProductBWeight] = useState<number>(1.2);
  const [productBUnit, setProductBUnit] = useState<'g' | 'kg' | 'ml' | 'l' | 'un'>('kg');
  const [productBPrice, setProductBPrice] = useState<number>(36.9);

  // Savings tab state
  const [householdSize, setHouseholdSize] = useState<number>(3);
  const [monthlyGrocerySpend, setMonthlyGrocerySpend] = useState<number>(1400);

  // Normalize weight to standard base: kg, L, or un
  const normalizeToBase = (val: number, unit: 'g' | 'kg' | 'ml' | 'l' | 'un') => {
    if (unit === 'g' || unit === 'ml') return val / 1000;
    return val;
  };

  const baseUnitLabel =
    productAUnit === 'g' || productAUnit === 'kg'
      ? 'kg'
      : productAUnit === 'ml' || productAUnit === 'l'
      ? 'litro'
      : 'unidade';

  const baseA = normalizeToBase(productAWeight, productAUnit);
  const baseB = normalizeToBase(productBWeight, productBUnit);

  const pricePerBaseA = baseA > 0 ? productAPrice / baseA : 0;
  const pricePerBaseB = baseB > 0 ? productBPrice / baseB : 0;

  const isBCheaper = pricePerBaseB < pricePerBaseA;
  const percentDiff =
    pricePerBaseA > 0 && pricePerBaseB > 0
      ? Math.abs(((pricePerBaseA - pricePerBaseB) / Math.max(pricePerBaseA, pricePerBaseB)) * 100)
      : 0;

  // Waste savings calculation based on Brazilian family average (20-30% food waste in household)
  const wasteRate = 0.22; // 22% waste reduction with expiration alerts + no duplicated buys
  const monthlySavings = monthlyGrocerySpend * wasteRate;
  const annualSavings = monthlySavings * 12;
  const foodSavedKg = householdSize * 4.2 * 12; // avg 4.2kg preserved per person/month

  return (
    <section id="calculadora" className={styles.calculatorSection}>
      <div className={`container ${styles.calcContainer}`}>
        <div className={styles.calcHeader}>
          <span className={styles.calcPill}>
            <Calculator size={14} /> Ferramenta Nativa do FaltaOquê?
          </span>
          <h2 className={styles.calcTitle}>
            Calculadoras Inteligentes de Economia
          </h2>
          <p className={styles.calcSubtitle}>
            Calcule o preço por kg/litro diretamente no corredor do supermercado e
            simule quanto sua casa pode economizar no ano.
          </p>

          <div className={styles.tabSwitcher}>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'unit' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('unit')}
            >
              <Scale size={16} />
              <span>Comparador de Preço por Peso / Litro</span>
            </button>
            <button
              type="button"
              className={`${styles.tabBtn} ${activeTab === 'savings' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('savings')}
            >
              <PiggyBank size={16} />
              <span>Simulador de Economia Anual</span>
            </button>
          </div>
        </div>

        {activeTab === 'unit' ? (
          /* Unit Price Comparator */
          <div className={styles.calcCardWrapper}>
            <div className={styles.productsGrid}>
              {/* Option A */}
              <div
                className={`${styles.productBox} ${
                  !isBCheaper && pricePerBaseA > 0 ? styles.winnerBox : ''
                }`}
              >
                <div className={styles.boxHeader}>
                  <span className={styles.optionTag}>Opção A</span>
                  {!isBCheaper && pricePerBaseA > 0 && (
                    <span className={styles.bestDealBadge}>
                      <CheckCircle2 size={13} /> Mais Econômico
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label>Identificação:</label>
                  <input
                    type="text"
                    value={productAName}
                    onChange={(e) => setProductAName(e.target.value)}
                    placeholder="Ex: Pote 500g"
                  />
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Quantidade / Peso:</label>
                    <input
                      type="number"
                      step="any"
                      min="0.1"
                      value={productAWeight}
                      onChange={(e) => setProductAWeight(parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className={styles.inputGroupSmall}>
                    <label>Unidade:</label>
                    <select
                      value={productAUnit}
                      onChange={(e) =>
                        setProductAUnit(e.target.value as 'g' | 'kg' | 'ml' | 'l' | 'un')
                      }
                    >
                      <option value="g">g (gramas)</option>
                      <option value="kg">kg (quilos)</option>
                      <option value="ml">ml</option>
                      <option value="l">L (litros)</option>
                      <option value="un">un (unidades)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Preço na prateleira (R$):</label>
                  <div className={styles.currencyInput}>
                    <span>R$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={productAPrice}
                      onChange={(e) => setProductAPrice(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Preço real por {baseUnitLabel}:</span>
                  <strong className={styles.resultValue}>
                    R$ {pricePerBaseA.toFixed(2)} /{baseUnitLabel}
                  </strong>
                </div>
              </div>

              {/* VS Badge */}
              <div className={styles.vsBadge}>
                <span>VS</span>
              </div>

              {/* Option B */}
              <div
                className={`${styles.productBox} ${
                  isBCheaper && pricePerBaseB > 0 ? styles.winnerBox : ''
                }`}
              >
                <div className={styles.boxHeader}>
                  <span className={styles.optionTag}>Opção B</span>
                  {isBCheaper && pricePerBaseB > 0 && (
                    <span className={styles.bestDealBadge}>
                      <CheckCircle2 size={13} /> Mais Econômico
                    </span>
                  )}
                </div>

                <div className={styles.inputGroup}>
                  <label>Identificação:</label>
                  <input
                    type="text"
                    value={productBName}
                    onChange={(e) => setProductBName(e.target.value)}
                    placeholder="Ex: Refil 1.2kg"
                  />
                </div>

                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label>Quantidade / Peso:</label>
                    <input
                      type="number"
                      step="any"
                      min="0.1"
                      value={productBWeight}
                      onChange={(e) => setProductBWeight(parseFloat(e.target.value) || 0)}
                    />
                  </div>

                  <div className={styles.inputGroupSmall}>
                    <label>Unidade:</label>
                    <select
                      value={productBUnit}
                      onChange={(e) =>
                        setProductBUnit(e.target.value as 'g' | 'kg' | 'ml' | 'l' | 'un')
                      }
                    >
                      <option value="g">g (gramas)</option>
                      <option value="kg">kg (quilos)</option>
                      <option value="ml">ml</option>
                      <option value="l">L (litros)</option>
                      <option value="un">un (unidades)</option>
                    </select>
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Preço na prateleira (R$):</label>
                  <div className={styles.currencyInput}>
                    <span>R$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={productBPrice}
                      onChange={(e) => setProductBPrice(parseFloat(e.target.value) || 0)}
                    />
                  </div>
                </div>

                <div className={styles.resultBox}>
                  <span className={styles.resultLabel}>Preço real por {baseUnitLabel}:</span>
                  <strong className={styles.resultValue}>
                    R$ {pricePerBaseB.toFixed(2)} /{baseUnitLabel}
                  </strong>
                </div>
              </div>
            </div>

            {/* Comparison Conclusion Banner */}
            <div className={styles.conclusionBanner}>
              <div className={styles.conclusionIcon}>
                <Sparkles size={24} />
              </div>
              <div className={styles.conclusionText}>
                <strong>
                  {isBCheaper
                    ? `A "${productBName}" é a melhor escolha!`
                    : `A "${productAName}" é a melhor escolha!`}
                </strong>
                <p>
                  Você economiza cerca de <strong>{percentDiff.toFixed(1)}%</strong> por {baseUnitLabel} optando
                  pelo produto mais vantajoso. Essa ferramenta está 100% disponível no app FaltaOquê!
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Annual Savings Simulator */
          <div className={styles.savingsCardWrapper}>
            <div className={styles.savingsForm}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <label>Pessoas morando na residência:</label>
                  <strong className={styles.sliderValue}>{householdSize} pessoas</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  value={householdSize}
                  onChange={(e) => setHouseholdSize(parseInt(e.target.value) || 1)}
                  className={styles.rangeSlider}
                />
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderHeader}>
                  <label>Gasto médio mensal no supermercado:</label>
                  <strong className={styles.sliderValue}>
                    R$ {monthlyGrocerySpend.toLocaleString('pt-BR')}
                  </strong>
                </div>
                <input
                  type="range"
                  min="300"
                  max="4000"
                  step="50"
                  value={monthlyGrocerySpend}
                  onChange={(e) => setMonthlyGrocerySpend(parseInt(e.target.value) || 300)}
                  className={styles.rangeSlider}
                />
              </div>
            </div>

            <div className={styles.savingsResultsGrid}>
              <div className={styles.savingsResultCard}>
                <span className={styles.savingTag}>Economia Mensal Estimada</span>
                <strong className={styles.highlightGreen}>
                  R$ {monthlySavings.toFixed(0)}
                  <small>/mês</small>
                </strong>
                <p>Evitando comida vencida e compras duplicadas no mercado.</p>
              </div>

              <div className={`${styles.savingsResultCard} ${styles.annualHighlight}`}>
                <span className={styles.savingTagGold}>Economia em 1 Ano</span>
                <strong className={styles.highlightGold}>
                  R$ {annualSavings.toLocaleString('pt-BR', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  <small>/ano</small>
                </strong>
                <p>Dinheiro resgatado que pode ser investido na sua família.</p>
              </div>

              <div className={styles.savingsResultCard}>
                <span className={styles.savingTag}>Alimentos Preservados</span>
                <strong className={styles.highlightBlue}>
                  {foodSavedKg.toFixed(0)} kg
                  <small>/ano</small>
                </strong>
                <p>Comida fresca consumida no momento certo em vez de ir para o lixo.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
