#include <iostream>
using namespace std;

int main()
{
    int oop,dm, ss, csa, ds; 
    float sum, avg, percentage;

    cout<<"Please Enter the marks of five subjects: \n";
    cout<<"oop marks:";
    cin>>oop;
    cout<<"dm marks:";
    cin>>dm; 
    cout<<"ss marks:";
    cin>>ss;
    cout<<"csa marks:"; 
    cin>>csa;
    cout<<"ds marks:";
    cin>>ds;

    sum = oop +dm + ss + csa + ds;
    avg = sum / 5;
    percentage = (sum / 500) * 100;

    
    cout<<"Average Marks = "<< avg;
    cout<< " Total Percentage = "<< percentage <<"%";

    return 0;
}