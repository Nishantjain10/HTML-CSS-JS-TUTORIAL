#include <iostream>
using namespace std;

int main() {    
    float One, Two, Three;

    cout << "Enter three numbers: ";
    cout<<"Number 1: ";
    cin >> One;
    cout<<"Number 2: ";
    cin >> Two; 
    cout<<"Number 3:";
    cin>> Three;

    if (One >= Two) {
        if (One >= Three)
            cout << "Largest number: " << One;
        else
            cout << "Largest number: " << Three;
    }
    else {
        if (Two >= Three)
            cout << "Largest number: " << Two;
        else
            cout << "Largest number: " << Three;
    }
    
    return 0;
}