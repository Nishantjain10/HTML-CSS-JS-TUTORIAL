#include <iostream>
using namespace std;

/*     HOMEWORK PATTERN 53:56

          1 1 1 1  
             2 2 2  
                3 3   
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
        int value = n - row + 1;
        while(col <= value) {
            cout << row;
            col = col + 1;
        }
        cout << endl;
        row += 1;
    }
}