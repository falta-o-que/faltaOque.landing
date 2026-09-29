'use client';

import React, { useState } from 'react';
import {
  QrCode,
  Plus,
  Minus,
  AlertTriangle,
  CheckCircle2,
  ShoppingCart,
  LayoutGrid,
  BarChart3,
  User,
  Sparkles,
  ChevronDown,
  Camera,
  Share2
} from 'lucide-react';
import styles from './PhoneMockup.module.scss';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  status: 'ok' | 'warning' | 'missing';
  statusText: string;
  daysLeft?: number;
}

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pantry' | 'list'>('pantry');
  const [filter, setFilter] = useState<'all' | 'warning' | 'missing'>('all');
  const [scanSimulated, setScanSimulated] = useState(false);

  const [products, setProducts] = useState<ProductItem[]>([
    {
      id: '1',
      name: 'Leite Semi Desnatado 1L',
      category: 'Laticínios',
      quantity: 2,
      unit: 'un',
      status: 'warning',
      statusText: 'Vence em 2 dias',
      daysLeft: 2,
    },
    {
      id: '2',
      name: 'Café Especial 500g',
      category: 'Matinais',
      quantity: 0,
      unit: 'pct',
      status: 'missing',
      statusText: 'Em Falta • Na Lista',
    },
    {
      id: '3',
      name: 'Azeite Extra Virgem 500ml',
      category: 'Óleos & Temperos',
      quantity: 1,
      unit: 'garrafa',
      status: 'ok',
      statusText: 'Validade: 6 meses',
    },
    {
      id: '4',
      name: 'Arroz Branco Tipo 1 5kg',
      category: 'Grãos',
      quantity: 2,
      unit: 'saco',
      status: 'ok',
      statusText: 'Em dia',
    },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        const newQty = Math.max(0, item.quantity + delta);
        let newStatus: 'ok' | 'warning' | 'missing' = item.status;
        let newStatusText = item.statusText;

        if (newQty === 0) {
          newStatus = 'missing';
          newStatusText = 'Em Falta • Na Lista';
        } else if (newQty > 0 && item.status === 'missing') {
          newStatus = 'ok';
          newStatusText = 'Em dia';
        }

        return {
          ...item,
          quantity: newQty,
          status: newStatus,
          statusText: newStatusText,
        };
      })
    );
  };

  const handleSimulateScan = () => {
    setScanSimulated(true);
    setTimeout(() => {
      setProducts((prev) => [
        {
          id: String(Date.now()),
          name: 'Iogurte Natural 170g (NFC-e)',
          category: 'Frios & Laticínios',
          quantity: 4,
          unit: 'pote',
          status: 'ok',
          statusText: 'Validade: 25 dias',
        },
        ...prev,
      ]);
      setScanSimulated(false);
    }, 1200);
  };

  const filteredProducts = products.filter((item) => {
    if (filter === 'warning') return item.status === 'warning';
    if (filter === 'missing') return item.status === 'missing';
    return true;
  });

  const missingProducts = products.filter((p) => p.status === 'missing');

  return (
    <div className={styles.phoneWrapper}>
      {/* Glow aura */}
      <div className={styles.glowAura} />

      {/* Floating interactive badge 1 */}
      <div className={styles.floatingBadgeLeft}>
        <div className={styles.badgeIcon}>
          <QrCode size={18} />
        </div>
        <div className={styles.badgeContent}>
          <strong>Leitura de Nota Fiscal</strong>
          <span>Escaneie QR Code da NFC-e em 5s</span>
        </div>
      </div>

      {/* Floating interactive badge 2 */}
      <div className={styles.floatingBadgeRight}>
        <div className={styles.badgeIconGreen}>
          <CheckCircle2 size={18} />
        </div>
        <div className={styles.badgeContent}>
          <strong>Lista Automática</strong>
          <span>Itens em falta vão para o carrinho</span>
        </div>
      </div>

      {/* Phone Hardware Shell */}
      <div className={styles.phoneFrame}>
        {/* Dynamic Island / Speaker Notch */}
        <div className={styles.notch}>
          <div className={styles.cameraDot} />
          <div className={styles.speakerBar} />
        </div>

        {/* Screen Content */}
        <div className={styles.screen}>
          {/* Status Bar */}
          <div className={styles.statusBar}>
            <span className={styles.time}>09:41</span>
            <div className={styles.statusIcons}>
              <span className={styles.signal}>●●●●</span>
              <span className={styles.wifi}>5G</span>
              <span className={styles.battery}>100%</span>
            </div>
          </div>

          {/* App Header (As seen in FaltaOquê? design) */}
          <div className={styles.appHeader}>
            <div className={styles.userInfo}>
              <div className={styles.avatar}>
                <User size={18} color="#ffffff" />
              </div>
              <div className={styles.pantrySelector}>
                <div className={styles.pantryTag}>
                  <span className={styles.colorDot} />
                  <strong>Despensa da Casa</strong>
                  <ChevronDown size={14} />
                </div>
                <span className={styles.sharedInfo}>3 membros conectados</span>
              </div>
            </div>

            <div className={styles.headerButtons}>
              <button
                type="button"
                className={styles.headerIconBtn}
                title="Compartilhar despensa"
              >
                <Share2 size={16} />
              </button>
              <button
                type="button"
                className={`${styles.headerIconBtn} ${styles.scanBtn} ${scanSimulated ? styles.scanning : ''}`}
                onClick={handleSimulateScan}
                title="Simular escaneamento de nota fiscal"
              >
                <Camera size={16} />
              </button>
            </div>
          </div>

          {/* Scan Notice banner when triggered */}
          {scanSimulated && (
            <div className={styles.scanNotice}>
              <Sparkles size={14} className={styles.spinIcon} />
              <span>Processando QR Code da Nota Fiscal...</span>
            </div>
          )}

          {/* Mode Switcher inside app */}
          <div className={styles.appTabs}>
            <button
              type="button"
              className={`${styles.appTab} ${activeTab === 'pantry' ? styles.active : ''}`}
              onClick={() => setActiveTab('pantry')}
            >
              Despensa ({products.length})
            </button>
            <button
              type="button"
              className={`${styles.appTab} ${activeTab === 'list' ? styles.active : ''}`}
              onClick={() => setActiveTab('list')}
            >
              Lista de Compras ({missingProducts.length})
            </button>
          </div>

          {activeTab === 'pantry' ? (
            <>
              {/* Filter Pills */}
              <div className={styles.filterPills}>
                <button
                  type="button"
                  className={`${styles.pill} ${filter === 'all' ? styles.pillActive : ''}`}
                  onClick={() => setFilter('all')}
                >
                  Todos
                </button>
                <button
                  type="button"
                  className={`${styles.pill} ${styles.pillWarn} ${filter === 'warning' ? styles.pillActiveWarn : ''}`}
                  onClick={() => setFilter('warning')}
                >
                  <AlertTriangle size={12} />
                  Vencendo (1)
                </button>
                <button
                  type="button"
                  className={`${styles.pill} ${styles.pillDanger} ${filter === 'missing' ? styles.pillActiveDanger : ''}`}
                  onClick={() => setFilter('missing')}
                >
                  Em Falta ({missingProducts.length})
                </button>
              </div>

              {/* Items List */}
              <div className={styles.itemsList}>
                {filteredProducts.map((item) => (
                  <div
                    key={item.id}
                    className={`${styles.itemCard} ${item.status === 'missing' ? styles.cardMissing : ''}`}
                  >
                    <div className={styles.itemMain}>
                      <div className={styles.itemHeaderRow}>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        <span
                          className={`${styles.statusBadge} ${
                            item.status === 'warning'
                              ? styles.badgeWarning
                              : item.status === 'missing'
                              ? styles.badgeDanger
                              : styles.badgeSuccess
                          }`}
                        >
                          {item.statusText}
                        </span>
                      </div>
                      <span className={styles.itemCategory}>{item.category}</span>
                    </div>

                    <div className={styles.qtyControl}>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, -1)}
                        title="Diminuir"
                      >
                        <Minus size={12} />
                      </button>
                      <span className={styles.qtyNumber}>
                        {item.quantity} {item.unit}
                      </span>
                      <button
                        type="button"
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, 1)}
                        title="Aumentar"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* Smart Grocery List Tab */
            <div className={styles.groceryView}>
              <div className={styles.groceryHeader}>
                <div>
                  <strong>Próxima Ida ao Mercado</strong>
                  <p>Gerada automaticamente pelos itens em falta</p>
                </div>
                <span className={styles.groceryCount}>
                  {missingProducts.length} itens
                </span>
              </div>

              {missingProducts.length === 0 ? (
                <div className={styles.emptyState}>
                  <CheckCircle2 size={32} color="#16a34a" />
                  <p>Tudo abastecido! Nenhum item em falta no momento.</p>
                </div>
              ) : (
                <div className={styles.groceryList}>
                  {missingProducts.map((p) => (
                    <div key={p.id} className={styles.groceryItem}>
                      <div className={styles.groceryInfo}>
                        <div className={styles.checkboxMock} />
                        <div>
                          <strong>{p.name}</strong>
                          <span>Sugestão: Mercado SuperMais (melhor preço)</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        className={styles.buyBtn}
                        onClick={() => updateQuantity(p.id, 1)}
                        title="Marcar como comprado"
                      >
                        Comprar
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className={styles.smartMarketTip}>
                <Sparkles size={14} color="#16a34a" />
                <span>
                  <strong>Dica de Economia:</strong> Comprar na Terça-feira economiza ~14% no setor de laticínios.
                </span>
              </div>
            </div>
          )}

          {/* Quick Floating Action Button */}
          <button
            type="button"
            className={styles.fabBtn}
            onClick={handleSimulateScan}
            title="Adicionar Produto"
          >
            <Plus size={22} color="#ffffff" />
          </button>

          {/* App Bottom Navigation */}
          <div className={styles.bottomNav}>
            <div className={`${styles.navItem} ${styles.navActive}`}>
              <LayoutGrid size={18} />
              <span>Despensa</span>
            </div>
            <div
              className={styles.navItem}
              onClick={() => setActiveTab('list')}
            >
              <ShoppingCart size={18} />
              <span>Lista</span>
            </div>
            <div className={styles.navItem}>
              <BarChart3 size={18} />
              <span>Dashboard</span>
            </div>
            <div className={styles.navItem}>
              <User size={18} />
              <span>Perfil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
