# Library management system

Student project

## Ogólne założenia aplikacji
Aplikacja webowa będzie umożliwiała użytkownikom:

- Przeglądanie książek.
- Rejestrowanie się i logowanie do systemu.
- Wypożyczanie książek.
- Rezerwowanie książek, które są chwilowo niedostępne.
- Zarządzanie swoimi wypożyczeniami.
- Dla administratorów: dodawanie, edytowanie i usuwanie książek, zarządzanie użytkownikami, generowanie raportów.

## Struktura aplikacji

- Frontend (React.js)
- Backend (Node.js + Express.js)
- Baza danych (PostgreSQL)
- Docker

## Funkcjonalności

1. Frontend (React.js)
    1.1 Strona główna
    - Wyświetlanie dostępnych książek.
    - Możliwość przeszukiwania książek według tytułu, autora, kategorii, itd.
    - Filtry i sortowanie książek (np. po dacie wydania, popularności).
    1.2 Rejestracja i logowanie
    - Formularz rejestracyjny (z danymi takimi jak imię, nazwisko, e-mail, hasło).
    - Logowanie użytkowników (hasło, e-mail).
    - Weryfikacja e-mail (potwierdzenie rejestracji przez wysyłkę linku aktywacyjnego).
    1.3 Strona profilu użytkownika
    - Przegląd wypożyczonych książek.
    - Możliwość przedłużenia wypożyczenia (jeśli książka nie jest zarezerwowana).
    - Historia wypożyczeń i opóźnienia (z informacją o ewentualnych karach).
    1.4 Strona książki
    - Szczegółowe informacje o książce (opis, autor, liczba dostępnych egzemplarzy, rok wydania).
    - Możliwość wypożyczenia książki.
    - Możliwość złożenia rezerwacji (jeśli książka jest aktualnie wypożyczona).
    1.5 Panel administratora
    - Zarządzanie książkami: dodawanie, edytowanie, usuwanie książek.
    - Zarządzanie użytkownikami: przeglądanie, edytowanie, blokowanie użytkowników.
    - Generowanie raportów: raporty o wypożyczeniach, dostępności książek, opóźnieniach.
2. Backend (Node.js + Express.js)
    2.1 Autoryzacja i autentykacja użytkowników
    - Logowanie i rejestracja użytkowników.
    - Użycie JWT (JSON Web Tokens) do autoryzacji.
    - Szyfrowanie haseł (np. bcrypt).
    2.2 Zarządzanie książkami
    - API do zarządzania książkami (CRUD - Create, Read, Update, Delete).
    - Możliwość dodawania książek do bazy danych.
    - Możliwość edytowania i usuwania książek.
    2.3 Zarządzanie wypożyczeniami
    - API do obsługi wypożyczeń (wypożyczanie książek, przedłużanie, zwroty).
    - Logika związana z datą wypożyczenia (np. sprawdzanie, czy książka jest dostępna).
    - Obsługa rezerwacji książek.
    2.4 Zarządzanie użytkownikami
    - API do rejestracji, logowania i zarządzania użytkownikami.
    - Przechowywanie danych użytkowników w bazie (imię, nazwisko, e-mail, hasło, rola).
    2.5 Raporty
    - Generowanie raportów (np. wypożyczenia, książki na stanie, zaległości).
    - API do pobierania raportów w formacie JSON.
3. Baza danych (PostgreSQL)
    3.1 Users: 
    - Przechowuje dane o użytkownikach (ID, imię, nazwisko, e-mail, hasło, rola).
    3.2 Books: 
    - Przechowuje dane o książkach (ID, tytuł, autor, rok wydania, ISBN, liczba dostępnych egzemplarzy).
    3.3 Loans: 
    - Przechowuje informacje o wypożyczeniach (ID książki, ID użytkownika, data wypożyczenia, data zwrotu, status).
    3.4 Reservations: 
    - Przechowuje informacje o rezerwacjach książek (ID książki, ID użytkownika, data rezerwacji).
    3.5 Transactions: 
    - Rejestruje płatności i kary (ID użytkownika, kwota, typ transakcji, data).