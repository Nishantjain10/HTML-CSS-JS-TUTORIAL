#include <iostream>
#include <string>
using namespace std;
class Employee
{
public:
    string name;
    int salary;
    Employee(string name, int salary, int sp)
    {
        this->name = name;
        this->salary = salary;
        this->secretpassword = sp;
    }
    void printDetails()
    {
        cout << "the name of first employee " << this->name << "And his salary is: " << this->salary << " Dollars" << endl;
    }
    void getsecretpassword()
    {
        cout << "The secret password is: " << this->secretpassword;
    }

private:
    int secretpassword;
};

class Programmer : public Employee
{
public:
    int errors;
};
int main()
{
    // cout<<"Hello World";
    // int a,b,c;
    // short _sa=9;
    // cout<<_sa;
    // int age;
    // cout << "Enter your age: " << endl;
    // cin >> age;

    // switch (age)
    // {
    // case (12):
    //     cout << "Your age 12 years old";
    //     break;
    // case (18):
    //     cout << "Your age 18 years old";
    //     break;

    // default:
    //     cout << "You are neither 12 nor 18years old";
    //     break;
    // }
    // if(age > 150 || age<1)
    // {
    //     cout << "invalid";
    // }

    // else if (age >= 18)
    // {
    //     cout << "You can vote";
    // }

    // else
    // {
    //     cout << "You cannot vote";
    // }

    //    int index = 0 ;
    //    while (index < 34)
    //        {
    //        cout<<"We are at the index number:"<<index <<endl;
    //        index = index + 1;
    //    }
    //    for (int i = 0; i < 34; i++)
    //    {
    //        cout<<"The value of I is "<<i <<endl;
    //    }
    //  int arr[] = {1, 3 , 6};
    //    cout<<arr[0];
    // int marks[6];
    // for (int i = 0; i < 6; i++)
    // {
    //     cout<<"Enter marks of the " <<i<< "th student: "<<endl;
    //     cin>>marks[i];
    // }
    // for (int i = 0; i < 6; i++)
    // {
    //     cout<<"The marks of the "<<i<<"th student is "<<marks[i]<<endl;
    // }

    // int arr2d[2][3] = {
    //     {1,2,3},
    //     {4,5,6}
    // };
    // for (int i = 0; i < 2; i++)
    // {
    //     for (int j = 0; j < 3; j++)
    //     {
    //         cout<<"The value at "<<i<< ", " <<j<<  " is " <<arr2d[i][j]<<endl;
    //     }

    // }

    // string name = "harry";
    // cout<<"The name is " <<name<<endl;
    // cout<<"The length of name is " <<name.length() <<endl;
    // cout<<"The name is " <<name.substr(0,3)<<endl;
    // cout<<"The name is " <<name.substr(2,3)<<endl;

    // int a = 34;
    // int* ptra;
    // ptra = &a;
    // cout<<*ptra;

    Employee har("Harry Constructor", 344, 32445);
    // har.name = "harry";
    // har.salary = 100;
    har.printDetails();
    har.getsecretpassword();
    // cout<<har.secretpassword;
    // cout << "the name of first employee " << har.name << "And his salary is: " << har.salary << " Dollars" << endl;

    return 0;
}