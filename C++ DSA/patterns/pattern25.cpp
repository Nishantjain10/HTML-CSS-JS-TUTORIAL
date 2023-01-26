#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int row = 1;

    while(row <= n) {
       int col = 1;
       while (col <= n - row + 1)
       {
        cout << col;
        col = col + 1;
       }
       
       int star = row - 1 + row - 1;
        while (star)
        {
            cout << "*";
            star = star - 1;
        }

       int count = n - row + 1; 
       while (count)
       {
        cout << count;
        count = count - 1;
       }

       cout << endl;
       row = row + 1; 
    }
}