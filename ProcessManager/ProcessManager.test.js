"use strict";

import { ProcessManager } from "./ProcessManager.class";

import { expect } from "chai";

describe("#ProcessManager", () => {
    it("se dados forem informados insere corretamente?", async () => {
        const process = await new ProcessManager().insert({
            name: "BalanceSheet.import",
            userId: "user-1",
            companyId: "company-1",
            accountingId: "accounting-1",
            params: {
                document: `1	ATIVO	0	114098,6	149822,3	92.148,23 D
                11	ATIVO CIRCULANTE	122.292,74 D	113722,76	149318,05	86.697,45 D
                111	DISPONÍVEL	72.550,09 D	111165,71	97018,35	86.697,45 D
                11101	CAIXA	2.873,77 D	200	2845,55	228,22 D
                11101001	CAIXA GERAL	2.777,31 D	200	2845,55	131,76 D
                11101002	FUNDO FIXO DE CAIXA	96,46 D	0	0	96,46 D
                11102	BANCOS CONTA MOVIMENTO	22.959,41 D	88120,55	91010,1	20.069,86 D
                11102001	CAIXA E. FEDERAL - C/C 0173/003/3322-3	3.264,70 D	51833,12	54006,75	1.091,07 D
                11102002	CAIXA E. FEDERAL - C/C 3659/003/3322-3 	19.694,71 D	36287,43	37003,35	18.978,79 D
                11103	APLICAÇÕES FINANCEIRAS LIQUIDEZ IMEDIATA	46.716,91 D	22845,16	3162,7	66.399,37 D
                11103001	CAIXA E. FEDERAL - APLIC. FINANC-FIC EXPERTISE RF CRED PRIV	49.325,46 D	920,77	3162,7	47.083,53 D
                11103002	CAIXA E FEDERAL - APLIC FINANC-FIC CAIXA GIRO MPE RF DI LP	0,00	19315,84	0	19.315,84 D
                11103090	(-) RECEITA A APROPRIAR S/APLIC FINANCEIRA	2.608,55 C	2608,55	0	0,00
                112	CRÉDITOS	49.113,50 D	2557,05	51670,55	0,00
                11201	CLIENTES A RECEBER	49.113,50 D	2557,05	51670,55	0,00
                11201001	CLIENTES DIVERSOS	49.113,50 D	2557,05	51670,55	0,00
                113	OUTROS CRÉDITOS	629,15 D	0	629,15	0,00`,
                date: {
                    month: 1,
                    year: 2019
                }
            }
        });

        expect(process).to.be.an("object");
    });
});
