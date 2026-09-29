'use client';

import React, { useState } from 'react';
import {
  Package,
  ShoppingCart,
  Plus,
  Minus,
  AlertCircle,
  CheckCircle2,
  Trash2,
  Sparkles,
  RefreshCw,
  ArrowRight,
  Info,
  QrCode
} from 'lucide-react';
import styles from './InteractivePantry.module.scss';

interface PantryProduct {
  id: string;
  name: string;
  category: string;
  brand: string;
  quantity: number;
  unit: string;
  expirationDate: string;
  daysToExpiration: number;
  isInPantry: boolean;
  estimatedPrice: number;
}

export const InteractivePantry: React.FC = () => {
  const [activeView, setActiveView] = useState<'both' | 'pantry' | 'list'>('both');
  const [notification, setNotification] = useState<string | null>(null);

  const initialItems: PantryProduct[] = [
    {
      id: 'p1',
      name: 'Leite Integral 1L',
      category: 'Laticínios',
      brand: 'Piracanjuba',
      quantity: 2,
      unit: 'un',
      expirationDate: '2026-10-02',
      daysToExpiration: 3,
      isInPantry: true,
      estimatedPrice: 5.49,
    },
    {
      id: 'p2',
      name: 'Café Torrado e Moído 500g',
      category: 'Matinais',
      brand: 'Melitta',
      quantity: 0,
      unit: 'pct',
      expirationDate: '2026-11-20',
      daysToExpiration: 52,
      isInPantry: false,
      estimatedPrice: 19.90,
    },
    {
      id: 'p3',
      name: 'Azeite Extra Virgem 500ml',
      category: 'Óleos & Temperos',
      brand: 'Gallo',
      quantity: 1,
      unit: 'vidro',
      expirationDate: '2027-02-15',
      daysToExpiration: 138,
      isInPantry: true,
      estimatedPrice: 42.90,
    },
    {
      id: 'p4',
      name: 'Arroz Branco 5kg',
      category: 'Grãos',
      brand: 'Camil',
      quantity: 3,
      unit: 'pct',
      expirationDate: '2027-04-10',
      daysToExpiration: 192,
      isInPantry: true,
      estimatedPrice: 28.50,
    },
    {
      id: 'p5',
      name: 'Detergente Líquido 500ml',
      category: 'Limpeza',
      brand: 'Ypê',
      quantity: 0,
      unit: 'frasco',
      expirationDate: '2027-08-01',
      daysToExpiration: 305,
      isInPantry: false,
      estimatedPrice: 2.89,
    },
  ];

  const [products, setProducts] = useState<PantryProduct[]>(initialItems);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const changeQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newQty = Math.max(0, item.quantity + delta);
        const willBeInPantry = newQty > 0;

        if (newQty === 0 && item.isInPantry) {
          showToast(`"${item.name}" acabou e foi para a Lista de Compras! (RF 14)`);
        } else if (newQty > 0 && !item.isInPantry) {
          showToast(`"${item.name}" reabastecido na Despensa! (RF 15)`);
        }

        return {
          ...item,
          quantity: newQty,
          isInPantry: willBeInPantry,
        };
      })
    );
  };

  const markAsPurchased = (id: string) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        return {
          ...item,
          quantity: 1,
          isInPantry: true,
        };
      })
    );
    showToast('Item marcado como comprado e retornado para a despensa! (RF 16)');
  };

  const pantryItems = products.filter((p) => p.isInPantry && p.quantity > 0);
  const groceryList = products.filter((p) => !p.isInPantry || p.quantity === 0);

  const totalListEstimated = groceryList.reduce(
    (acc, curr) => acc + curr.estimatedPrice,
    0
  );

  const resetDemo = () => {
    setProducts(initialItems);
    showToast('Simulador restaurado ao estado inicial!');
  };

  return (
    <section id="simulador" className={styles.simulatorSection}>
      <div className={`container ${styles.simContainer}`}>
        <div className={styles.simHeader}>
          <span className={styles.simPill}>
            <Sparkles size={14} /> Demonstração Interativa em Tempo Real
          </span>
          <h2 className={styles.simTitle}>
            Experimente a sincronia entre Despensa e Lista
          </h2>
          <p className={styles.simSubtitle}>
            Reduza a quantidade de qualquer alimento até zero para ver a automação em ação:
            o produto é transferido instantaneamente para a lista de mercado de todos da casa.
          </p>

          <div className={styles.controlsBar}>
            <div className={styles.viewToggle}>
              <button
                type="button"
                className={`${styles.viewBtn} ${activeView === 'both' ? styles.viewBtnActive : ''}`}
                onClick={() => setActiveView('both')}
              >
                Visão Lado a Lado
              </button>
              <button
                type="button"
                className={`${styles.viewBtn} ${activeView === 'pantry' ? styles.viewBtnActive : ''}`}
                onClick={() => setActiveView('pantry')}
              >
                Só Despensa ({pantryItems.length})
              </button>
              <button
                type="button"
                className={`${styles.viewBtn} ${activeView === 'list' ? styles.viewBtnActive : ''}`}
                onClick={() => setActiveView('list')}
              >
                Só Lista ({groceryList.length})
              </button>
            </div>

            <button
              type="button"
              className={styles.resetBtn}
              onClick={resetDemo}
              title="Resetar demonstração"
            >
              <RefreshCw size={14} />
              <span>Resetar Simulação</span>
            </button>
          </div>
        </div>

        {/* Toast Alert */}
        {notification && (
          <div className={styles.toastNotice}>
            <CheckCircle2 size={16} color="#16a34a" />
            <span>{notification}</span>
          </div>
        )}

        {/* Dual Panel Simulation Arena */}
        <div
          className={`${styles.arenaGrid} ${
            activeView === 'pantry'
              ? styles.singlePantry
              : activeView === 'list'
              ? styles.singleList
              : ''
          }`}
        >
          {/* Panel 1: A Despensa */}
          {(activeView === 'both' || activeView === 'pantry') && (
            <div className={styles.pantryPanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelTitleGroup}>
                  <div className={styles.panelIconPantry}>
                    <Package size={20} />
                  </div>
                  <div>
                    <h3>Despensa Domiciliar</h3>
                    <span>{pantryItems.length} produtos armazenados</span>
                  </div>
                </div>
                <div className={styles.pantryLiveBadge}>
                  <span className={styles.liveDot} />
                  Em sincronia
                </div>
              </div>

              <div className={styles.cardsScroll}>
                {pantryItems.length === 0 ? (
                  <div className={styles.emptyCard}>
                    <AlertCircle size={32} color="#f59e0b" />
                    <strong>A despensa está vazia!</strong>
                    <p>Todos os itens acabaram e foram transferidos para a Lista de Compras.</p>
                  </div>
                ) : (
                  pantryItems.map((item) => {
                    const isExpiringSoon = item.daysToExpiration <= 5;
                    return (
                      <div
                        key={item.id}
                        className={`${styles.productCard} ${
                          isExpiringSoon ? styles.warningBorder : ''
                        }`}
                      >
                        <div className={styles.productMainInfo}>
                          <div className={styles.productTitleRow}>
                            <h4 className={styles.pName}>{item.name}</h4>
                            {isExpiringSoon ? (
                              <span className={styles.tagExpiring}>
                                <AlertCircle size={12} />
                                Vence em {item.daysToExpiration} dias!
                              </span>
                            ) : (
                              <span className={styles.tagOk}>
                                <CheckCircle2 size={12} />
                                Validade OK
                              </span>
                            )}
                          </div>
                          <div className={styles.productMeta}>
                            <span className={styles.metaBadge}>{item.category}</span>
                            <span className={styles.metaBrand}>{item.brand}</span>
                            <span className={styles.metaPrice}>
                              R$ {item.estimatedPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <div className={styles.productActions}>
                          <div className={styles.qtyBox}>
                            <button
                              type="button"
                              className={styles.counterBtn}
                              onClick={() => changeQuantity(item.id, -1)}
                              title="Consumir 1 unidade"
                            >
                              <Minus size={14} />
                            </button>
                            <span className={styles.qtyVal}>
                              {item.quantity} {item.unit}
                            </span>
                            <button
                              type="button"
                              className={styles.counterBtn}
                              onClick={() => changeQuantity(item.id, 1)}
                              title="Adicionar mais 1"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <button
                            type="button"
                            className={styles.markMissingBtn}
                            onClick={() => changeQuantity(item.id, -item.quantity)}
                            title="Marcar como 'Acabou / Em Falta'"
                          >
                            Acabou!
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className={styles.panelFooterHint}>
                <Info size={14} />
                <span>
                  Clique em <strong>"Acabou!"</strong> ou reduza a quantidade para ver a automação.
                </span>
              </div>
            </div>
          )}

          {/* Panel 2: A Lista de Compras Automática */}
          {(activeView === 'both' || activeView === 'list') && (
            <div className={styles.groceryPanel}>
              <div className={styles.panelHeader}>
                <div className={styles.panelTitleGroup}>
                  <div className={styles.panelIconCart}>
                    <ShoppingCart size={20} />
                  </div>
                  <div>
                    <h3>Lista de Compras Inteligente</h3>
                    <span>{groceryList.length} itens necessários</span>
                  </div>
                </div>
                <div className={styles.cartTotalPill}>
                  Est. R$ {totalListEstimated.toFixed(2)}
                </div>
              </div>

              <div className={styles.cardsScroll}>
                {groceryList.length === 0 ? (
                  <div className={styles.emptyCard}>
                    <CheckCircle2 size={36} color="#16a34a" />
                    <strong>Lista de compras zerada!</strong>
                    <p>Sua despensa está 100% abastecida. Nenhum produto em falta.</p>
                  </div>
                ) : (
                  groceryList.map((item) => (
                    <div key={item.id} className={styles.groceryCard}>
                      <div className={styles.groceryCardMain}>
                        <div className={styles.checkMockBox} />
                        <div>
                          <h4 className={styles.groceryName}>{item.name}</h4>
                          <div className={styles.grocerySub}>
                            <span className={styles.badgeMissing}>Em Falta</span>
                            <span>{item.category}</span>
                            <span className={styles.priceEstimate}>
                              ~ R$ {item.estimatedPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className={styles.buyActionBtn}
                        onClick={() => markAsPurchased(item.id)}
                        title="Marcar como adquirido no mercado"
                      >
                        <CheckCircle2 size={14} />
                        <span>Comprei</span>
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className={styles.panelFooterCart}>
                <div className={styles.cartSummaryRow}>
                  <span>Total estimado da compra:</span>
                  <strong>R$ {totalListEstimated.toFixed(2)}</strong>
                </div>
                <div className={styles.autoOrganizeTip}>
                  <span>
                    🛒 <strong>Ordem por Corredores:</strong> Grãos ➔ Frios ➔ Laticínios ➔ Limpeza
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
