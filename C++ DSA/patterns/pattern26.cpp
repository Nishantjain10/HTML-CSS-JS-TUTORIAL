#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int row = 1;

    while(row <= n) {
       int col = 1; 
       int count = n - col + 1; 
       while (count)
       {
        cout << count;
        count = count + 1;
       }

       cout << endl;
       row = row + 1; 
    }
}