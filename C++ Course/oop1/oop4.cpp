#include<iostream>
using namespace std;
class smartphone
{
    private:
    string phone_company;
    string phone_model_name;
    string phone_price;
    string phone_memory;
    string  phone_colour;
    public:
    void insert(string N,string M,string A,string S,string C)
    {
        phone_company=N;
        phone_model_name=M;
        phone_price=A;
        phone_memory=S;
        phone_colour=C;
    }
    void display()
    {
        cout<<"name of smartphone company ="<<phone_company<<endl<<"model name ="<<phone_model_name<<endl<<"smartphone price ="<<phone_price<<endl<<"smartphone specifications = "<<phone_memory<<endl<<"smartphone colour ="<<phone_colour<<endl;
    }
};
int main(void)
{
    smartphone A1;
    smartphone A2;
    A1.insert("Samsung","A51","25000","256GB","Saphhire Blue");
    A2.insert("Micromax","IN1B","11000","64GB","RED");
    A1.display();
    cout<<endl;
    cout<<endl;
    A2.display();
    return 0;

    
    
    }