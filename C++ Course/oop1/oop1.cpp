#include <iostream>
using namespace std;

int main()
{
    float cm, inches;
    cout << "enter height in cm\n";
    cin >> cm;

    inches = cm * 0.39370144;
    cout << "cm to inch : " << inches;

    return 0;
}