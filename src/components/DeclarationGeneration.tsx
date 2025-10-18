import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Download, 
  Send, 
  Eye,
  CheckCircle2,
  FileCheck
} from "lucide-react";

const DeclarationGeneration = () => {
  const declarationInfo = {
    period: "Décembre 2024",
    type: "TVA Mensuelle",
    regime: "Réel Normal",
    amount: "2 450 000 FCFA",
    dueDate: "15 Janvier 2025"
  };

  const documents = [
    { name: "Déclaration TVA (PDF)", size: "245 KB", format: "pdf", ready: true },
    { name: "Déclaration TVA (XML)", size: "18 KB", format: "xml", ready: true },
    { name: "Annexe justificatifs", size: "3.2 MB", format: "pdf", ready: true },
    { name: "Grand livre comptable", size: "892 KB", format: "pdf", ready: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-3xl font-bold text-foreground">Déclaration prête</h1>
          <p className="text-muted-foreground">Vos documents sont générés et prêts à être transmis</p>
        </div>

        {/* Declaration Summary */}
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle>Récapitulatif de déclaration</CardTitle>
            <CardDescription>Vérifiez les informations avant transmission</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Période</p>
                <p className="font-semibold text-foreground">{declarationInfo.period}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Type de déclaration</p>
                <p className="font-semibold text-foreground">{declarationInfo.type}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Régime fiscal</p>
                <p className="font-semibold text-foreground">{declarationInfo.regime}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Date limite</p>
                <p className="font-semibold text-warning">{declarationInfo.dueDate}</p>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex items-center justify-between bg-primary-light p-4 rounded-lg">
              <span className="font-semibold text-foreground">Montant à payer</span>
              <span className="text-2xl font-bold text-primary">{declarationInfo.amount}</span>
            </div>
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documents générés</CardTitle>
            <CardDescription>Téléchargez ou visualisez vos documents conformes DGI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${doc.ready ? "bg-success/10" : "bg-muted"}`}>
                      {doc.ready ? (
                        <FileCheck className="h-5 w-5 text-success" />
                      ) : (
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {doc.size} • {doc.format.toUpperCase()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {doc.ready && (
                      <>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          Voir
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                    {!doc.ready && (
                      <Badge variant="outline" className="text-muted-foreground">
                        En attente
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transmission Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-secondary/20">
            <CardHeader>
              <Download className="h-6 w-6 text-secondary mb-2" />
              <CardTitle className="text-base">Export manuel</CardTitle>
              <CardDescription className="text-sm">
                Téléchargez et transmettez via le portail DGI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                Télécharger tout (ZIP)
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <Send className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-base">Transmission directe</CardTitle>
              <CardDescription className="text-sm">
                Envoi automatique vers la DGI (prochainement)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground" disabled>
                Transmettre à la DGI
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Final Actions */}
        <Card className="bg-success-light border-success/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="font-semibold text-foreground mb-2">
                  Prêt pour la transmission
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Votre déclaration est conforme aux exigences de la DGI. Tous les documents sont validés et prêts à être transmis.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    Retour aux modifications
                  </Button>
                  <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                    Marquer comme transmise
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeclarationGeneration;
