# Przystań

Prototyp aplikacji mobilnej (Expo / React Native) do rezerwacji obiektów sportowych — korty, orliki, squash, baseny, pilates — oraz specjalistów: trenerów, fizjoterapeutów, dietetyków i lekarzy sportowych. Z rankingami i zweryfikowanymi opiniami. Treści przykładowe z Trójmiasta.

To statyczny prototyp UI: bez backendu i stanu, z prostą nawigacją między ekranami.

## Ekrany

| Trasa | Ekran |
| --- | --- |
| `/` | Mój klub — powitanie, przycisk Mój asystent, najbliższa rezerwacja, ulubione, polecane |
| `/my-ai` | Mój asystent — asystent głosowy w stanie „słucham”, transkrypcja, wyniki |
| `/znajdz` | Znajdź — wyszukiwarka, chipy sportów, karty obiektów |
| `/mapa` | Znajdź — mapa Gdyni z pinezkami i kartą obiektu |
| `/obiekt` | Profil obiektu — galeria, opinie, udogodnienia, cennik |
| `/hospitality` | Hospitality — kategorie specjalistów i lista |
| `/specjalista` | Profil specjalisty — pozycja w rankingu, usługi, ceny, opinie |
| `/ranking` | Ranking — top trenerzy w Gdyni |
| `/termin` | Wybór terminu — kalendarz i sloty |
| `/potwierdzenie` | Potwierdzenie rezerwacji |
| `/opinia` | Wystaw opinię — oceny w kategoriach, zweryfikowana wizyta |
| `/rezerwacje` | Rezerwacje — nadchodzące i historia |
| `/konto` | Konto — profil, statystyki, portfel, moje sporty |
| `/ustawienia` | Ustawienia — wygląd (systemowy / jasny / ciemny), dane osobowe, opinie, płatności i BLIK, powiadomienia |

Statyczne makiety HTML, od których zaczął się projekt: [`docs/przystan-makiety.html`](docs/przystan-makiety.html), podgląd: [`docs/podglad.png`](docs/podglad.png).

## Uruchomienie

```bash
npm install
npx expo start
```

Zeskanuj kod QR w Expo Go (iOS / Android) albo naciśnij `w`, żeby otworzyć wersję web.

## Publikacja (EAS Update)

Workflow [`.github/workflows/eas-update.yml`](.github/workflows/eas-update.yml) po każdym pushu na `main`:

1. instaluje zależności i sprawdza typy,
2. łączy repo z projektem `przystan` na expo.dev (`eas init`; przy pierwszym uruchomieniu tworzy projekt),
3. publikuje aktualizację OTA (`eas update --auto`) na gałąź EAS `main`.

Wymaga sekretu repozytorium `EXPO_TOKEN` (expo.dev → Account settings → Access tokens). Opublikowaną aktualizację znajdziesz na expo.dev w projekcie `przystan` → Updates; stamtąd można ją otworzyć w Expo Go kodem QR.

## Stos

Expo SDK 58 · Expo Router · react-native-svg · expo-linear-gradient · lucide-react-native · Fraunces + Plus Jakarta Sans (`@expo-google-fonts`).

Paleta „Głębia”: ciepłe tło `#F5F1EA`, atrament `#0F2A33`, głębina `#0F4C5C` / `#134652` (bloki marki i tab bar), morska zieleń `#2EC4B6` (oceny, Hospitality), piasek `#EDE5D7`, koral `#FF6B5B` (tylko „Zarezerwuj”) — w [`src/theme.ts`](src/theme.ts).

Motyw jasny i ciemny: kolory semantyczne (`LIGHT` / `DARK`) są w [`src/theme.ts`](src/theme.ts), a wybór użytkownika (systemowy / jasny / ciemny) zapisuje [`ThemeProvider`](src/components/ThemeProvider.tsx) w AsyncStorage. Ekrany pobierają kolory przez `useTheme()`.
