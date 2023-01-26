#include <iostream>
using namespace std;

/*    HOMEWORK  PATTERN  53:24

          1 2 3 4  
             2 3 4  
                3 4   
                   4   
         
*/


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
        
        int col = 1;
        int ch = 1 + row + col - 2;
        int value = n - row + 1;
        while(col <= value) {
            cout << ch;
            ch = ch + 1;
            col = col + 1;
        }
        cout << endl;
        row += 1;
    }
}