#include<iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int row = 1;
    int count = 1;

    while(row<=n) {
      int  j = 1;
      while (j<=row)
      {
        cout << count << " ";
        count = count + 1;
        j = j + 1;
      }
      cout << endl;
    row = row + 1;
      
    }
}