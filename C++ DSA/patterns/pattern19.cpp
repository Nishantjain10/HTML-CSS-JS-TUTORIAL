#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;

    int row = 1;

    while (row <= n)

    {
        int space = row - 1;
        while (space)
        {
            cout << " ";
            space = space - 1;
        }
        
        int col = n - row + 1;
        while(col) {
            cout << "*";
            col = col - 1;
        }
        cout << endl;
        row += 1;
    }
}