#include<iostream>
using namespace std;

int main(){

  int n;
  cin>>n;

  int row = 1;
  while(row <= n){
    int col = 1;

    //Space Printing
    int space = n - row;
    while(space){
      cout<<" ";
      space = space - 1;
    }

    // Star Printing
    while(col <= row){
      cout<<row;
      col =  col + 1;
      }
    cout<<endl;
    row = row + 1;
  }
}