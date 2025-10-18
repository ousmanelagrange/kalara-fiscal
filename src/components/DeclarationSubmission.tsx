import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Send, 
  Download, 
  FileCheck,
  Clock,
  Mail,
  Smartphone
} from "lucide-react";

const DeclarationSubmission = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success/10 mb-4 animate-pulse">
            <CheckCircle2 className="h-12 w-12 text-success" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Déclaration transmise !</h1>
          <p className="text-lg text-muted-foreground">Votre déclaration TVA de Décembre 2024 a été soumise avec succès</p>
        </div>

        {/* Timeline Status */}
        <Card className="border-success/20">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-success-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Génération des documents</p>
                    <Badge className="bg-success text-success-foreground">Terminé</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">PDF et XML conformes DGI générés</p>
                  <p className="text-xs text-muted-foreground mt-1">28 Déc 2024, 14:32</p>
                </div>
              </div>

              <div className="ml-5 h-8 w-0.5 bg-success"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-success-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Transmission portail DGI</p>
                    <Badge className="bg-success text-success-foreground">Terminé</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Documents transmis avec succès</p>
                  <p className="text-xs text-muted-foreground mt-1">28 Déc 2024, 14:35</p>
                </div>
              </div>

              <div className="ml-5 h-8 w-0.5 bg-warning"></div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-warning flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-warning-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Validation DGI</p>
                    <Badge className="bg-warning text-warning-foreground">En attente</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Traitement en cours par l'administration fiscale</p>
                  <p className="text-xs text-muted-foreground mt-1">Délai habituel: 24-48h</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reference Info */}
        <Card>
          <CardHeader>
            <CardTitle>Références de votre déclaration</CardTitle>
            <CardDescription>Conservez ces informations pour votre suivi</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Numéro de déclaration</p>
                <p className="text-lg font-bold text-foreground font-mono">TVA-2024-12-001234</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Date de transmission</p>
                <p className="text-lg font-bold text-foreground">28 Décembre 2024, 14:35</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Montant déclaré</p>
                <p className="text-lg font-bold text-primary">2 450 000 FCFA</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Date limite paiement</p>
                <p className="text-lg font-bold text-warning">15 Janvier 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Télécharger vos documents</CardTitle>
            <CardDescription>Tous les fichiers de votre déclaration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Déclaration TVA (PDF)</p>
                    <p className="text-xs text-muted-foreground">245 KB • Conforme DGI</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Déclaration TVA (XML)</p>
                    <p className="text-xs text-muted-foreground">18 KB • Format télédéclaration</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <FileCheck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">Récépissé de dépôt</p>
                    <p className="text-xs text-muted-foreground">87 KB • Preuve de transmission</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Download className="h-4 w-4 mr-2" />
                Tout télécharger (ZIP)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-primary-light border-primary/20">
          <CardHeader>
            <CardTitle>Prochaines étapes</CardTitle>
            <CardDescription>Ce qu'il faut faire maintenant</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Effectuer le paiement</p>
                  <p className="text-sm text-muted-foreground">
                    Payez le montant de 2 450 000 FCFA avant le 15 Janvier 2025 via votre banque ou le portail e-payment DGI
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Conserver les documents</p>
                  <p className="text-sm text-muted-foreground">
                    Archivez tous les documents pendant 10 ans minimum (obligation légale)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Suivre la validation</p>
                  <p className="text-sm text-muted-foreground">
                    Vous recevrez une notification lorsque la DGI aura validé votre déclaration
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Notifications activées</CardTitle>
            <CardDescription>Nous vous tiendrons informé</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg mb-3">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground text-sm">Email</p>
                  <p className="text-xs text-muted-foreground">contact@entreprise.cm</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-success-light text-success border-success">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Actif
              </Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground text-sm">SMS</p>
                  <p className="text-xs text-muted-foreground">+237 6XX XX XX XX</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-success-light text-success border-success">
                <CheckCircle2 className="h-3 w-3 mr-1" />
                Actif
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col gap-4">
          <Button className="w-full bg-primary hover:bg-primary-glow text-primary-foreground">
            <Send className="h-4 w-4 mr-2" />
            Envoyer le récépissé par email
          </Button>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              Voir l'historique
            </Button>
            <Button variant="outline">
              Retour au tableau de bord
            </Button>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center py-6">
          <p className="text-lg font-semibold text-success mb-2">
            ✓ Félicitations !
          </p>
          <p className="text-sm text-muted-foreground">
            Votre déclaration fiscale est en cours de traitement. <br />
            Vous avez rempli vos obligations fiscales dans les délais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeclarationSubmission;
