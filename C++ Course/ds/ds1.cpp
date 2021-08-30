#include<iostream>
using namespace std;
int main ()
{
    int A[100], SIZE, i, max, min;
    cout << "Enter the size of the array : ";
    cin >> SIZE;
    cout << "Enter the elements of the array : "<<endl;
    for (i = 0; i < SIZE; i++)
        cin >> A[i];
    max = A[0];
    for (i = 0; i < SIZE; i++)
    {
        if (max < A[i])
            max = A[i];
    }
    min = A[0];
    for (i = 0; i < SIZE; i++)
    {
        if (min > A[i])
            min = A[i];
    }
    cout << "Largest element : " << max<<endl;
    cout << "Smallest element : " << min<<endl;
    return 0;
}