#include <iostream>
using namespace std;

/*      HOMEWORK PATTERN 54:38

                 1  
               2 3  
             4 5 6   
          7 8 9 10      
         
*/

int main()
{
    int n;
    cin >> n;

    int row = 1;
    int count =  1;

    while (row <= n)

    {
        int space = n - row;
        while (space)
        {
            cout << " ";
            space = space - 1;
        }
        
        int col = 1;
        while(col <= row) {
            cout << count;
            count = count + 1;
            col = col + 1;
        }
        cout << endl;
        row += 1;
    }
}