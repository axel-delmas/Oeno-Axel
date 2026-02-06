# Comment mettre votre site en ligne (Gratuitement)

Félicitations, vous avez maintenant les fichiers de votre site web ! Mais pour l'instant, ils ne sont que sur votre ordinateur. Pour que tout le monde puisse y accéder, il faut les mettre sur un **serveur**. C'est ce qu'on appelle l'hébergement ("hosting").

Voici 3 méthodes, de la plus simple à la plus professionnelle.

## Méthode 1 : Netlify Drop (Le plus simple, en 30 secondes)
C'est parfait pour tester immédiatement sans rien installer.

1.  Allez sur [app.netlify.com/drop](https://app.netlify.com/drop).
2.  Prenez le dossier qui contient vos fichiers (`index.html`, `styles.css`, `script.js`) sur votre ordinateur.
3.  Glissez-déposez ce dossier directement dans la zone carrée sur la page web.
4.  Attendez quelques secondes... et voilà ! Netlify va vous donner un lien (du type `random-name.netlify.app`). Votre site est en ligne.

**Inconvénient** : Si vous voulez modifier le site, vous devez re-glisser le dossier à chaque fois.

---

## Méthode 2 : Vercel ou Netlify avec GitHub (Recommandé)
C'est la méthode "pro". À chaque fois que vous modifiez votre code sur votre ordinateur et que vous l'envoyez sur GitHub, votre site se met à jour tout seul.

### Étape A : Mettre le code sur GitHub
1.  Créez un compte sur [github.com](https://github.com).
2.  Créez un "New Repository" (Nouveau dépôt). Donnez-lui un nom (ex: `Oeno-ENPC-site`).
3.  Sur votre ordinateur, ouvrez le terminal dans le dossier de votre projet.
4.  Tapez les commandes suivantes (GitHub vous les donne aussi) :
    ```bash
    git init
    git add .
    git commit -m "Premier commit"
    git branch -M main
    git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/Oeno-ENPC-site.git
    git push -u origin main
    ```

### Étape B : Connecter à Vercel
1.  Allez sur [vercel.com](https://vercel.com) et créez un compte (connectez-vous avec GitHub, c'est plus simple).
2.  Cliquez sur "Add New..." -> "Project".
3.  Vous verrez votre projet `Oeno-ENPC-site` dans la liste (import from GitHub). Cliquez sur "Import".
4.  Cliquez sur "Deploy".
5.  Attendez une minute. Vercel va vous donner une URL finale.

**Avantage** : Modifiez `index.html`, faites un `git push`, et votre site se met à jour automatiquement !

---

## Méthode 3 : GitHub Pages
Si vous ne voulez pas utiliser Vercel ou Netlify.

1.  Une fois votre code sur GitHub (voir Étape A ci-dessus).
2.  Allez dans les "Settings" de votre dépôt GitHub.
3.  Cliquez sur "Pages" dans le menu de gauche.
4.  Sous "Build and deployment", dans "Source", choisissez "Deploy from a branch".
5.  Sous "Branch", choisissez `main` et `/root`, puis "Save".
6.  Attendez quelques minutes, GitHub vous donnera le lien de votre site.


---

## Comparatif : Méthode 2 (Vercel/Netlify) vs Méthode 3 (GitHub Pages)

Vous hésitez ? Voici les pour et les contre.

### Vercel / Netlify (Méthode 2)
✅ **Les Plus :**
*   **Performance :** Souvent plus rapide (CDN mondial optimisé).
*   **Fonctionnalités :** Permet d'ajouter plus tard du code "backend" (choses complexes) si vous évoluez.
*   **Aperçus :** Si vous travaillez en équipe, ils créent un "site de tes" pour chaque modification avant de la valider.
*   **Mise en place :** Extrêmement simple à connecter avec GitHub.

❌ **Les Moins :**
*   C'est un service tiers (en plus de GitHub).

### GitHub Pages (Méthode 3)
✅ **Les Plus :**
*   **Tout-en-un :** Tout reste sur GitHub, pas de nouveau compte à créer ailleurs.
*   **Gratuit :** Comme les autres, mais intégré à votre "stockage" de code.

❌ **Les Moins :**
*   **Plus lent à mettre à jour :** Quand vous modifiez le code, le site peut mettre 1 à 2 minutes à se rafraîchir (Vercel est quasi instantané).
*   **Limité :** Convient parfaitement pour ce site "vitrine", mais sera bloquant si vous voulez créer une boutique ou un espace membre complexe plus tard.
*   **Configuration :** Parfois un peu plus capricieux sur la gestion des domaines personnalisés ou des redirections.

👉 **Mon conseil** : Commencez par **Vercel ou Netlify**. C'est le standard moderne, plus rapide et plus flexible pour l'avenir.

---

## Résumé
- **Pour tester tout de suite** : Méthode 1 (Netlify Drop).
- **Pour un vrai site durable** : Méthode 2 (Vercel + GitHub).

---

## Méthode Bonus : Avoir votre propre nom de domaine
Par défaut, votre site aura une adresse en `.netlify.app` ou `.vercel.app`. Pour avoir une adresse pro comme `www.Oeno-ENPC.fr` (ou `.com`), suivez ces étapes :

### 1. Acheter le nom de domaine
Vous devez acheter le nom. C'est comme louer l'adresse de votre maison sur internet. Cela coûte environ 10-15€ par an.
- Allez chez un "registrar" comme **OVH** (très bien pour les `.fr`), **Gandi**, ou **Namecheap**.
- Cherchez votre nom (ex: `Oeno-ENPC`) et achetez-le.

### 2. Connecter le domaine à votre site
Si vous utilisez **Vercel** ou **Netlify** (Méthode 2) :
1.  Allez dans les paramètres de votre projet sur Vercel/Netlify ("Settings").
2.  Allez dans l'onglet **Domains**.
3.  Entrez votre domaine (ex: `www.Oeno-ENPC.fr`) et cliquez sur "Add".
4.  Vercel/Netlify va vous donner des instructions techniques ("DNS Records").
    - Souvent, il faut ajouter un "CNAME" ou un "A Record".
5.  Retournez sur le site où vous avez acheté le domaine (OVH, Gandi...) dans la zone "DNS".
6.  Copiez-collez les informations données par Vercel/Netlify.
7.  Attendez quelques heures (la propagation DNS), et votre site sera accessible via votre nouvelle adresse !

Bon lancement ! 🍷
