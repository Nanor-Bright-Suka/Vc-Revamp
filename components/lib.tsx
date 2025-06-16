// lib/useRouteStyles.ts
'use client'

import { usePathname } from 'next/navigation'


export function useRouteIconClass(): string {
  const pathname = usePathname()

  const menuIconStyles: Record<string, string> = {
    '/': 'text-white', // home
    '/about': 'text-black', // about
    '/education/research-works': 'text-black',
    '/education/academic-qualifications': 'text-black',
    '/contact': 'text-black', // contact
  }

  return menuIconStyles[pathname] || 'text-white'
}



export const ResearchWorks = [
  {
    title:"A validated HPLC – FLD method for the determination of mycotoxin levels in sun dried fermented cocoa beans: Effect of cola nut extract and powder",
    link: "http://www.scopus.com/inward/record.url?eid=2-s2.0-85107136085&partnerID=MN8TOARS"
  },
  {
    title:"Selection and validation of reference genes for accurate RT-qPCR gene expression normalization in cacao beans during fermentation",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85099861157&partnerID=MN8TOARS",

  }, 
  {
    title:"Pod storage with roasting: A tool to diversifying the flavor profiles of dark chocolates produced from ‘bulk’ cocoa beans? (Part II: Quality and sensory profiling of chocolates)",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85079860604&partnerID=MN8TOARS"
  },
  {
    title:"Applicability of the melanger for chocolate refining and Stephan mixer for conching as small-scale alternative chocolate production techniques",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85062223116&partnerID=MN8TOARS",
  },
  {
    title:"Assessment of soil fertility and quality for improved cocoa production in six cocoa growing regions in Ghana",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85049594060&partnerID=MN8TOARS"

  },{
    title:"Comparing flavor profiles of dark chocolates refined with melanger and conched with Stephan mixer in various alternative chocolate production techniques",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85059505691&partnerID=MN8TOARS"
  },
  {
    title:"Pod storage with roasting: A tool to diversifying the flavor profiles of dark chocolates produced from ‘bulk’ cocoa beans? (part I: aroma profiling of chocolates)",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85060554146&partnerID=MN8TOARS"
  },
  {
    title:"Reducing polycyclic aromatic hydrocarbon contamination in smoked fish in the Global South: a case study of an improved kiln in Ghana",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85067414505&partnerID=MN8TOARS"
  },
  {
    title:"Tuning the aroma profiles of FORASTERO cocoa liquors by varying pod storage and bean roasting temperature",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85069597494&partnerID=MN8TOARS"
  },
  {
    title:"Assessing the influence of pod storage on sugar and free amino acid profiles and the implications on some Maillard reaction related flavor volatiles in Forastero cocoa beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85048121937&partnerID=MN8TOARS"
  },
  {
    title:"Constraints for future cocoa production in Ghana",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85015680694&partnerID=MN8TOARS"
  },
  {
    title:"Effect of pretreatments and processing conditions on anti-nutritional factors in climbing bean flours",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85017570130&partnerID=MN8TOARS"
  },
  {
    title:"Functionality of inulin and polydextrose as sucrose replacers in sugar-free dark chocolate manufacture – effect of fat content and bulk mixture concentration on rheological, mechanical and melting properties",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84996598170&partnerID=MN8TOARS"
  },
  {
    title:"Changes in physico-chemical characteristics and volatile flavour components of different yoghurt products made from soy, peanuts and cow milk",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85019945390&partnerID=MN8TOARS"
  },
  {
    title:"Chocolate Science and Technology: Second Edition",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-85017368784&partnerID=MN8TOARS"
  },
  {
    title:"Factors influencing quality variation in cocoa (Theobroma cacao) bean flavour profile - A review",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84955563505&partnerID=MN8TOARS"
  },
  {
    title:"Effect of blanching and frying on textural profile and appearance of yam (Dioscorea rotundata) French fries",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84922741317&partnerID=MN8TOARS"
  },
  {
    title:"Farmer Preference, Utilization, and Biochemical Composition of Improved Cassava (Manihot esculenta Crantz) Varieties in Southeastern Africa",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84939965893&partnerID=MN8TOARS"
  },
  {
    title:"Rheological properties, melting behaviours and physical quality characteristics of sugar-free chocolates processed using inulin/polydextrose bulking mixtures sweetened with stevia and thaumatin extracts",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84924138645&partnerID=MN8TOARS"
  },
  {
    title:"Varietal diversity and processing effects on the biochemical composition, cyanogenic glucoside potential (HCNp) and appearance of cassava flours from South-Eastern African region",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84930243153&partnerID=MN8TOARS"
  },
  {
    title:"Changes in chemical quality of cocoa butter during roasting of pulp pre-conditioned and fermented cocoa (Theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84922679585&partnerID=MN8TOARS"
  },
  {
    title:"Optimisation of processing conditions and rheological properties using stephan mixer as conche in small-scale chocolate processing",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84894250945&partnerID=MN8TOARS"
  },
  {
    title:"Optimization of inulin and polydextrose mixtures as sucrose replacers during sugar-free chocolate manufacture - Rheological, microstructure and physical quality characteristics",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84888635497&partnerID=MN8TOARS"
  },
  {
    title:"Spatial distribution of total phenolic content, enzymatic activities and browning in white yam (Dioscorea rotundata) tubers",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84920252284&partnerID=MN8TOARS"
  },
  {
    title:"Application of ISO 22000 in comparison with HACCP on industrial processing of milk chocolate",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84884682607&partnerID=MN8TOARS"
  },
  {
    title:"Application of multiple component constraint mixture design for studying the effect of ingredient variations on the chemical composition and physico-chemical properties of soy-peanut-cow milk",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84874965083&partnerID=MN8TOARS"
  },
  {
    title:"Changes in acidification, sugars and mineral composition of cocoa pulp during fermentation of pulp pre-conditioned cocoa (Theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84880612793&partnerID=MN8TOARS"
  },
  {
    title:"Changes in nib acidification and biochemical composition during fermentation of pulp pre-conditioned cocoa (theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84884687239&partnerID=MN8TOARS"
  },
  {
    title:"Chemical composition and physical quality characteristics of Ghanaian cocoa beans as affected by pulp pre-conditioning and fermentation",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84885580653&partnerID=MN8TOARS"
  },
  {
    title:"Industrial manufacture of sugar-free chocolates - Applicability of alternative sweeteners and carbohydrate polymers as raw materials in product development",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84881543981&partnerID=MN8TOARS"
  },
  {
    title:"Risk assessment of vacuum-packed pouched tuna chunks during industrial processing using ISO 22000 and HACCP systems",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84891641005&partnerID=MN8TOARS"
  },
  {
    title:"Changes in total polyphenols, o-diphenols and anthocyanin concentrations during fermentation of pulp pre-conditioned cocoa (Theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84864794896&partnerID=MN8TOARS"
  },
  {
    title:"Characterization of chemical composition and anti-nutritional factors in seven species within the Ghanaian yam (dioscorea) germplasm",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84864793466&partnerID=MN8TOARS"
  },
  {
    title:"Chemical composition and cyanogenic potential of traditional and high yielding CMD resistant cassava (Manihot esculenta crantz) varieties",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84856859116&partnerID=MN8TOARS"
  },
  {
    title:"Extrusion cooking of rice-groundnut-cowpea mixtures - effects of extruder characteristics on nutritive value and physico-functional properties of extrudates using response surface methodology",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84867101604&partnerID=MN8TOARS"
  },
  {
    title:"Influence of pulp-preconditioning and fermentation on fermentative quality and appearance of ghanaian cocoa (theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84856823448&partnerID=MN8TOARS"
  },
  {
    title:"Effect of pulp preconditioning on acidification, proteolysis, sugars and free fatty acids concentration during fermentation of cocoa (Theobroma cacao) beans",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-80053950945&partnerID=MN8TOARS"
  },
  {
    title:"Tempering, polymorphism and fat crystallization during industrial chocolate manufacture: Regimes, behaviours and their effects on finished chocolate quality",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84895267179&partnerID=MN8TOARS"
  },
  {
    title:"Acidification and starch behaviour during co-fermentation of cassava (Manihot esculenta Crantz) and soybean (Glycine max Merr) into gari, an African fermented food",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77954943187&partnerID=MN8TOARS"
  },
  {
    title:"Chocolate Science and Technology",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-84891583471&partnerID=MN8TOARS"
  },
  {
    title:"Effect of spontaneous fermentation and amylase-rich flour on the nutritive value, functional and viscoelastic properties of cowpea-fortified nixtamalized maize",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77951491830&partnerID=MN8TOARS"
  },
  {
    title:"Effects of polymeric coating and anti-fungal treatment on the shrinkage characteristics of pineapple fruits during storage",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77956941698&partnerID=MN8TOARS"
  },
  {
    title:"Modelling the effects of feed moisture and ingredient variations on the physical properties and functional characteristics of extruded sorghum-groundnut-cowpea blends using response surface methodology",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77956372989&partnerID=MN8TOARS"
  },
  {
    title:"Response surface methodology for studying the effects of feed moisture and ingredient variations on the chemical composition and appearance of extruded sorghum-groundnut-cowpea blends",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-78650917103&partnerID=MN8TOARS"
  },
  {
    title:"Response surface methodology for studying the quality characteristics of cowpea (Vigna Unguiculata)-based tempeh",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77955150548&partnerID=MN8TOARS"
  },
  {
    title:"Viscoelastic properties and pasting characteristics of fermented maize: Influence of the addition of malted cereals",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-77956385714&partnerID=MN8TOARS"
  },
  {
    title:"Comparison of rheological models for determining dark chocolate viscosity",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-57649126176&partnerID=MN8TOARS"
  },
  {
    title:"Fat bloom development and structure-appearance relationships during storage of under-tempered dark chocolates",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-58149166730&partnerID=MN8TOARS"
  },
  {
    title:"Influence of tempering and fat crystallization behaviours on microstructural and melting properties in dark chocolate systems",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-58149247914&partnerID=MN8TOARS"
  },
  {
    title:"Matrix effects on flavour volatiles release in dark chocolates varying in particle size distribution and fat content using GC-mass spectrometry and GC-olfactometry",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-52949150080&partnerID=MN8TOARS"
  },
  {
    title:"Microstructure and mechanical properties related to particle size distribution and composition in dark chocolate",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-57649112598&partnerID=MN8TOARS"
  },
  {
    title:"Characterization of melting properties in dark chocolates from varying particle size distribution and composition using differential scanning calorimetry",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-48149111499&partnerID=MN8TOARS"
  },
  {
    title:"Effects of particle size distribution and composition on rheological properties of dark chocolate",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-41549148738&partnerID=MN8TOARS"
  },
  {
    title:"Effects of tempering and fat crystallisation behaviour on microstructure, mechanical properties and appearance in dark chocolate systems",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-45549096990&partnerID=MN8TOARS"
  },
  {
    title:"Flavor formation and character in cocoa and chocolate: A critical review",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-51749120796&partnerID=MN8TOARS"
  },
  {
    title:"Modelling tempering behaviour of dark chocolates from varying particle size distribution and fat content using response surface methodology",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-49949104277&partnerID=MN8TOARS"
  },
  {
    title:"Particle size distribution and compositional effects on textural properties and appearance of dark chocolates",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-39649116430&partnerID=MN8TOARS"
  },
  {
    title:"Relationship between rheological, textural and melting properties of dark chocolate as influenced by particle size distribution and composition",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-46649119910&partnerID=MN8TOARS"
  },
  {
    title:"Effects of cowpea fortification and the level of ripeness of plantain on the nutritive value of plantain based snack foods",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-34047155009&partnerID=MN8TOARS"
  },
  {
    title:"Factors influencing rheological and textural qualities in chocolate - a review",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-34248215794&partnerID=MN8TOARS"
  },
  {
    title:"Response surface methodology for studying the effect of processing conditions on some nutritional and textural properties of bambara groundnuts (Voandzei subterranea) during canning",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-34250739927&partnerID=MN8TOARS"
  },

  {
    title:"Application of response surface methodology for optimizing the pre-processing conditions of bambara groundnut (Voandzei Subterranea) during canning",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-33846477343&partnerID=MN8TOARS"
  },
   {
    title:"Application of response surface methodology for studying the influence of soaking, blanching and sodium hexametaphosphate salt concentration on some biochemical and physical characteristics of cowpeas (Vigna unguiculata) during canning",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-33745187163&partnerID=MN8TOARS"
  },
   {
    title:"Changes in souring development, nutritional and functional properties during fermentation of cowpea-fortified nixtamalized maize",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-33947305448&partnerID=MN8TOARS"
  },
   {
    title:"Effect of solid state fermentation on the physico-chemical, functional and textural properties of nixtamalized maize",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-33645892271&partnerID=MN8TOARS"
  },
   {
    title:"Response surface methodology for optimizing the pre-processing conditions during canning of a newly developed and promising cowpea (Vigna unguiculata) variety",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-27744561185&partnerID=MN8TOARS"
  },
   {
    title:"Application of response surface methodology for studying the product characteristics of extruded rice-cowpea-groundnut blends",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-8844286087&partnerID=MN8TOARS"
  },
   {
    title:"Effect of nixtamalization on the chemical and functional properties of maize",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-1642351835&partnerID=MN8TOARS"
  },
  {
    title:"The microflora of fermented nixtamalized corn",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-4444382671&partnerID=MN8TOARS"
  },
  {
    title:"Application of response surface methodology for studying the quality characteristics of cowpea-fortified nixtamalized maize",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0037334176&partnerID=MN8TOARS"  
  },
  {
    title:"Effect of fermentation on the quality characteristics of nixtamalized corn",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0037229788&partnerID=MN8TOARS"
  },
  {
    title:"Changes in cell wall constituents and mechanical properties during post-harvest hardening of trifoliate yam Dioscorea dumetorum (Kunth) pax tubers",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0036232081&partnerID=MN8TOARS"
  },
  {
    title:"Changes in rheological properties and amylase activities of trifoliate yam, Dioscorea dumetorum, starch after harvest",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0036097953&partnerID=MN8TOARS"
  },
  {
    title:"Textural and microstructural changes associated with post-harvest hardening of trifoliate yam (Dioscorea dumetorum) pax tubers",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0036091148&partnerID=MN8TOARS"
  },
  {
    title:"Viscoelastic properties and changes in pasting characteristics of trifoliate yam (Dioscorea dumetorum) starch after harvest",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0036094228&partnerID=MN8TOARS"
  },
  {
    title:"Chemical composition and quality changes occurring in Dioscorea dumetorum pax tubers after harvest",
    link:"http://www.scopus.com/inward/record.url?eid=2-s2.0-0034860781&partnerID=MN8TOARS"
  }

]