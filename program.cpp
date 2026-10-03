#include <iostream>
using namespace std;

int main() {

    int benar;

    cout << "=================================" << endl;
    cout << "       AIPEDIA - KUIS AI         " << endl;
    cout << "=================================" << endl;

    cout << "Masukkan jumlah jawaban benar (0-5): ";
    cin >> benar;

    int nilai = benar * 20;

    cout << endl;
    cout << "Jumlah benar : " << benar << endl;
    cout << "Nilai kamu   : " << nilai << endl;

    if (nilai == 100) {
        cout << "Predikat     : Sempurna!" << endl;
    }
    else if (nilai >= 80) {
        cout << "Predikat     : Sangat Baik!" << endl;
    }
    else if (nilai >= 60) {
        cout << "Predikat     : Cukup Baik" << endl;
    }
    else {
        cout << "Predikat     : Perlu Belajar Lagi" << endl;
    }

    return 0;
}