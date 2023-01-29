import { useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../public/css/style.css'

export default function App({ Component, pageProps }) {

  const listOfPersonalReferences = [
    {
      id: 1, name: "Ivan Lazić", position: "Position 1", image: "../images/person.png", description: "Description number 1", listOfProjects: [
        {
          id: 1, investor: "Investitor: LA FANTANA, Goč", projects: [
            { project: "Projekat: Upravljačko nadzorni sistem crpljenja vode i dopreme do nove fabrike", function: "Funkcija: Realizacija aplikativnog softvera, testiranje i puštanje u rad" }
          ]
        },
        {
          id: 2, investor: "Investitor: JKP Vodovod i kanalizacija Novi Sad", projects: [
            { project: "Projekat: Upravljački sistem duvaljki za pranje filter polja", function: "Funkcija: Realizacija aplikativnog softvera, testiranje i puštanje u rad" },
            { project: "Projekat: Upravljački sistem crpnih stanica kanalizacije", function: "Funkcija: Realizacija aplikativnog softvera, testiranje i puštanje u rad" }
          ]
        },
        {
          id: 3, investor: "Investitor: JKP Toplana Kraljevo", projects: [
            { project: "Projekat: Sistem upravljanja pumpama po zadatom pritisku koji se održava u sistemu", function: "Funkcija: Rukovodilac projekta, realizacija aplikativnog softvera, testiranje i puštanje u rad" }
          ]
        },
        {
          id: 4, investor: "Investitor: Fabrika šećera Crvenka", projects: [
            { project: "Projekat: Upravljački sistem glavnog motornog pogona rezalice za repu", function: "Funkcija: Rukovodilac projekta, realizacija PLC, HMI aplikativnog softvera na filtraciji" }
          ]
        },
        {
          id: 5, investor: "Investitor: AIK Bačka Topola", projects: [
            { project: "Projekat: Upravljački sistem destruktora", function: "Funkcija: Rukovodilac projekta, realizacija PLC, HMI aplikativnog softvera" }
          ]
        },
        {
          id: 6, investor: "Investitor: Opšta bolnica Vrbas", projects: [
            { project: "Projekat: Upravljački sistem postrojenja za prečišćavanje otpadnih voda", function: "Funkcija: Rukovodilac projekta, realizacija PLC, HMI aplikativnog softvera" }
          ]
        },
        {
          id: 7, investor: "Investitor: Enker Tešanj", projects: [
            { project: "Projekat: Nadzorno - upravljački sistem peći za sinterovanje keramike", function: "Funkcija: Rukovodilac projekta, realizacija PLC, HMI, SCADA aplikativnog softvera" }
          ]
        },
        {
          id: 8, investor: "Investitor: JKP Vodovod i kanalizacija Sremska Mitrovica", projects: [
            { project: "Projekat: Upravljački sistem crpne stanice Jarak", function: "Funkcija: Rukovodilac projekta, realizacija PLC aplikativnog softvera" },
            { project: "Projekat: GPRS upravljanje kompletnom vodovodnom mrežom snabdevanja grada", function: "Funkcija: Rukovodilac projekta, realizacija PLC, SCADA aplikativnog softvera" },
            { project: "Projekat: Rekonstrukcija hidro mašinskih sala i integracija upravljanja pumpama na SCADA sistem", function: "Funkcija: Rukovodilac projekta, realizacija PLC, SCADA aplikativnog softvera" },
            { project: "Projekat: Rekonstrukcija filterskih polja za vodu i izrada upravljačkog sistema filtriranja vode", function: "Funkcija: Rukovodilac projekta, realizacija PLC, SCADA aplikativnog softvera" }
          ]
        },
        {
          id: 9, investor: "Investitor: JKP Vodovod i kanalizacija Derventa", projects: [
            { project: "Projekat: GPRS upravljanje kompletnom vodovodnom mrežom snabdevanja grada", function: "Funkcija: Realizacija PLC i SCADA aplikativnog softvera" },
            { project: "Projekat: Upravljačko - nadzorni sistem bunarskog kompleksa i održavanje pritiska i protoka prema potrošačima u gradu", function: "Funkcija: Rukovodilac projekta, realizacija PLC, SCADA aplikativnog softvera" },
          ]
        },
        {
          id: 10, investor: "Investitor: JKP Vodovod i kanalizacija Indjija", projects: [
            { project: "Projekat: Upravljački sistem održavanja pritiska prema gradu", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
          ]
        },
        {
          id: 11, investor: "Investitor: Vulkan Niš", projects: [
            { project: "Projekat: Upravljački sistem kotlarnice na ugalj", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
          ]
        },
        {
          id: 12, investor: "Investitor: Meridijana Bijeljina", projects: [
            { project: "Projekat: Upravljački sistem impregrnacije drvenih bandera", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
          ]
        },
        {
          id: 13, investor: "Investitor: Interklima Vrnjačka Banja", projects: [
            { project: "Projekat: Upravljački sistem regulacije temperature na oplatnoj peći u Kolubari", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
          ]
        },
        {
          id: 14, investor: "Investitor: Binemikom Beograd", projects: [
            { project: "Projekat: Isporuke mreže hidrocelova za održavanje pritiska u zgradama sa funkcijom PP zaštite", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
            { project: "Projekat: Izrada upravljačkog sistema grebača (skreper) sirovina u rafineriji nafte Novi Sad", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },

          ]
        },
        {
          id: 15, investor: "Investitor: NIS GAZPROMNJEFT, Beograd", projects: [
            { project: "Projekat: Upravljački sistem grejanja", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
            { project: "Projekat: Automatizacija bunker stanice Pristan 3, NIS Smederevo", function: "Funkcija: Realizacija PLC,HMI i SCADA aplikativnog softvera" }
          ]
        },
        {
          id: 16, investor: "Investitor: Elixir Group Šabac", projects: [
            { project: "Projekat: Upravljački sistem kotlarnice na gas", function: "Funkcija: Realizacija PLC,HMI i SCADA aplikativnog softvera" },
          ]
        },
        {
          id: 17, investor: "Investitor: Čip Prokuplje", projects: [
            { project: "Projekat: Upravljački sistem merenja i doziranja drvene sečke u kotao", function: "Funkcija: Realizacija PLC,HMI i SCADA aplikativnog softvera" },
          ]
        },
        {
          id: 18, investor: "Investitor: Remming Novi Sad", projects: [
            { project: "Projekat: Upravljački sistem kotlarnice na gas", function: "Funkcija: Realizacija PLC,HMI i SCADA aplikativnog softvera" },
          ]
        },
        {
          id: 19, investor: "Investitor: JKP Toplana Subotica", projects: [
            { project: "Projekat: Upravljački sistem kompletne kotlarnice", function: "Funkcija: Realizacija PLC,HMI i SCADA aplikativnog softvera" },
          ]
        },
        {
          id: 20, investor: "Investitor: FCA Kragujevac", projects: [
            { project: "Projekat: Upravljački sistem rekuperacije toplotne energije i izgradnja BEMS sistema", function: "Funkcija: Rukovodilac projekta" },
            { project: "Projekat: Formiranje BEMS sistema nadzora osvetljenja, kontrole otvaranja prozora i teretnih vrata, rekuperacije otpadne toplote sa kompresora", function: "Funkcija: Rukovodilac projekta" },
          ]
        },
        {
          id: 21, investor: "Investitor: Prva Petoletka Inženjering Beograd", projects: [
            { project: "Projekat: Automatika elektrohidrauličkog sistema KB7 I KB5, Kazahstan", function: "Funkcija: Rukovodilac projekta" }
          ]
        }
      ]
    },
    {
      id: 2, name: "Darko Gajić", position: "Position 2", image: "../images/person.png", description: "Description number 2", listOfProjects: [
        {
          id: 1, investor: "Investitor: Biospringer Senta, Fabrika kvasca i ekstrakta kvasca (ex. Alltech Fermin)", projects: [
            { project: "Projekat: DCS pogona ekstrakta kvasca, sa migracijom PCS7 sa v.7.1 na v.8.2", function: "Funkcija: Rukovodilac projekta" },
            { project: "Projekat: Upravljački sistem postrojenja za skladištenje i transport melase", function: "Funkcija: Realizacija aplikativnog softvera, testiranje i puštanje u rad" },
            { project: "Projekat: Upravljački sistem centrifuga", function: "Funkcija: Realizacija aplikativnog softvera, testiranje i puštanje u rad" },
          ]
        },
        {
          id: 2, investor: "Investitor: CRH Moravacem d.o.o. Popovac", projects: [
            { project: "Projekat: DCS CEMAT upravljački sistem – pogoni transporta klinkera, transporta cementa, skladištenja i transporta “filera” i sirovinskog brašna, rinfuzne stanice i transporta", function: "Funkcija: Rukovodilac projekta" }
          ]
        },
        {
          id: 3, investor: "Investitor: Sunoko d.o.o. PC Vrbas", projects: [
            { project: "Projekat: DCS pogona kuvanja repe, kaskadno i kontinualno kuvanje (sa migracijom PCS7 sa v.7.1 na v.9.1)", function: "Funkcija: Rukovodilac projekta" }
          ]
        },
        {
          id: 4, investor: "Investitor: Sunoko d.o.o. Beograd, PC Pećinci", projects: [
            { project: "Projekat: DCS PCS7 upravljački sistem Fabrike za odšećeravanje melase", function: "Funkcija: Rukovodilac projekta, realizacija PLC aplikativnog softvera na filtraciji" }
          ]
        },
        {
          id: 5, investor: "Investitor: Remming d.o.o. Novi Sad, za JKP Toplana Novi Sad", projects: [
            { project: "Projekat: Upravljački sistem vrelovodnog kotla 58MW, u kotlarnici “Sever”", function: "Funkcija: Rukovodilac projekta, realizacija PLC aplikativnog softvera" }
          ]
        },
        {
          id: 6, investor: "Investitor: Siemens d.o.o. Beograd, za “Fiat automobili Srbija” Kragujevac", projects: [
            { project: "Projekat: DCS PCS7 upravljački sistem vrelovodne kotlarnice, ukupna snaga 181MW", function: "Funkcija: Rukovodilac projekta" }
          ]
        },
        {
          id: 7, investor: "Investitor: US Steel Serbia, Smederevo", projects: [
            { project: "Projekat: Upravljački sistem linije 4 aglomeracije (sinterovanje rude)", function: "Funkcija: Rukovodilac projekta, realizacija PLC aplikativnog softvera na filterima" }
          ]
        },
        {
          id: 8, investor: "Investitor: Trayal Korporacija a.d., Kruševac", projects: [
            { project: "Projekat: Rekonstrukcija upravljačkog sistema miksera K7 (Chronos Richardson)", function: "Funkcija: Rukovodilac projekta, realizacija PLC aplikativnog softvera" }
          ]
        },
        {
          id: 9, investor: "Investitor: Tehnomatik 1995 Novo Selo, Vrnjačka Banja", projects: [
            { project: "Projekat: Upravljački sistem pakerica za praškaste i zrnaste materijale visokog kapaciteta, sa servomotornim pogonima", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" }
          ]
        },
        {
          id: 10, investor: "Investitor: Nova Trsa d.o.o. Vrnjačka Banja", projects: [
            { project: "Projekat: Upravljačko - nadzorni sistem snabdevanja mineralnom vodom iz bunara u Fabrici “Voda Vrnjci”", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" },
            { project: "Projekat: Upravljačko - nadzorni sistem snabdevanja mineralnom vodom iz bunara u Fabrici “Mivela” Trstenik", function: "Funkcija: Rukovodilac projekta" }

          ]
        },
        {
          id: 11, investor: "Investitor: JKP “Vodovod” Ćuprija", projects: [
            { project: "Projekat: Upravljački sistem Fabrike za prečišćavanje vode na izvorištu “Nemanja”", function: "Funkcija: Realizacija PLC i HMI aplikativnog softvera" }
          ]
        },
        {
          id: 12, investor: "Investitor: Thyssen Krupp Industrial Solutions GmbH, za “TE-KO” Kostolac", projects: [
            { project: "Projekat: Upravljački sistem bagera 6600 m3/h", function: "Funkcija: Rukovodilac projekta" }
          ]
        },
      ]
    },
    {
      id: 3, name: "Zoran Tašin", position: "Position 3", image: "../images/person.png", description: "Description number 3", listOfProjects: [
        {
          id: 1, investor: "Investitor: Biospringer Senta, Fabrika kvasca i ekstrakta kvasca (ex. Alltech Fermin)", projects: [
            { project: "Projekat: DCS pogona ekstrakta kvasca, sa migracijom PCS7 sa v.7.1 na v.8.2", function: "Funkcija: Izvršilac" },
            { project: "Projekat: SCADA sistem za nadzor fabrike sa web interfejsom", function: "Funkcija: Rukovodilac projekta" },
            { project: "Projekat:  Sistem za praćenje proizvodnje i upis u bazu podataka fabrike", function: "Funkcija: Rukovodilac projekta" },

          ]
        },
        {
          id: 2, investor: "Investitor: ELEX COMMERCE", projects: [
            { project: "Projekat: SOLTARIS –Solid Target Irradiation System – sistem za ozračivanje čvrstih meta", function: "Funkcija: Rukovodilac projekta" }
          ]
        },
        {
          id: 3, investor: "Investitor: Sunoko d.o.o. PC Vrbas", projects: [
            { project: "Projekat: DCS pogona kuvanja repe, kaskadno i kontinualno kuvanje (sa migracijom PCS7 sa v.7.1 na v.9.1)", function: "Funkcija: Izvršilac" }
          ]
        },
        {
          id: 4, investor: "Investitor: Sunoko d.o.o. Beograd, PC Pećinci", projects: [
            { project: "Projekat: DCS PCS7 upravljački sistem Fabrike za odšećeravanje melase", function: "Funkcija: Izvršilac" }
          ]
        },
        {
          id: 5, investor: "Investitor:  Siemens d.o.o. Beograd, za “Fiat automobili Srbija” Kragujevac", projects: [
            { project: "Projekat: DCS PCS7 upravljački sistem vrelovodne kotlarnice, ukupna snaga 181MW", function: "Funkcija: Izvršilac" }
          ]
        },
      ]
    }
  ]

  useEffect(() => {
    localStorage.setItem("listOfPersonalReferences", JSON.stringify(listOfPersonalReferences));
  }, []);
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
