import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FiscalDashboard from "@/components/FiscalDashboard";
import ProfileCompletion from "@/components/ProfileCompletion";
import TaxConfiguration from "@/components/TaxConfiguration";
import AccountingCategories from "@/components/AccountingCategories";
import DataImport from "@/components/DataImport";
import DocumentVerification from "@/components/DocumentVerification";
import TaxCalculation from "@/components/TaxCalculation";
import PreDeclarationSummary from "@/components/PreDeclarationSummary";
import DeclarationGeneration from "@/components/DeclarationGeneration";
import DeclarationSubmission from "@/components/DeclarationSubmission";
import DeclarationHistory from "@/components/DeclarationHistory";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="bg-sidebar border-b sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-sidebar-foreground">Kalar - Déclaration Fiscale</h1>
            </div>
            <TabsList className="grid w-full grid-cols-11 bg-sidebar-accent text-xs">
              <TabsTrigger value="dashboard" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Dashboard
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Profil
              </TabsTrigger>
              <TabsTrigger value="taxconfig" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Config fiscale
              </TabsTrigger>
              <TabsTrigger value="categories" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Catégories
              </TabsTrigger>
              <TabsTrigger value="import" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Import
              </TabsTrigger>
              <TabsTrigger value="verification" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Vérification
              </TabsTrigger>
              <TabsTrigger value="calculation" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Calculs
              </TabsTrigger>
              <TabsTrigger value="summary" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Récap
              </TabsTrigger>
              <TabsTrigger value="generation" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Génération
              </TabsTrigger>
              <TabsTrigger value="submission" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Soumission
              </TabsTrigger>
              <TabsTrigger value="history" className="data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground">
                Historique
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <TabsContent value="dashboard" className="mt-0">
          <FiscalDashboard />
        </TabsContent>
        <TabsContent value="profile" className="mt-0">
          <ProfileCompletion />
        </TabsContent>
        <TabsContent value="taxconfig" className="mt-0">
          <TaxConfiguration />
        </TabsContent>
        <TabsContent value="categories" className="mt-0">
          <AccountingCategories />
        </TabsContent>
        <TabsContent value="import" className="mt-0">
          <DataImport />
        </TabsContent>
        <TabsContent value="verification" className="mt-0">
          <DocumentVerification />
        </TabsContent>
        <TabsContent value="calculation" className="mt-0">
          <TaxCalculation />
        </TabsContent>
        <TabsContent value="summary" className="mt-0">
          <PreDeclarationSummary />
        </TabsContent>
        <TabsContent value="generation" className="mt-0">
          <DeclarationGeneration />
        </TabsContent>
        <TabsContent value="submission" className="mt-0">
          <DeclarationSubmission />
        </TabsContent>
        <TabsContent value="history" className="mt-0">
          <DeclarationHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
