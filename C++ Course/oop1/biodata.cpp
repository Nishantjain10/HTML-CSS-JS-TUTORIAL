#include <iostream>
using namespace std;

class student
{
	private:
		char  name;
		int   rollNo;
		int   total;
		float perc;
	public:
				void getDetails(void);
		
		void putDetails(void);
};

void student::getDetails(void){
	cout << "Enter name: " ;
	cin >> name;
	cout << "Enter roll number: ";
	cin >> rollNo;
	cout << "Enter total marks outof 500: ";
	cin >> total;
	
	perc=(float)total/500*100;
}


void student::putDetails(void){
	cout << "Student details:\n";
	cout << "Name:"<< name << ",Roll Number:" << rollNo << ",Total:" << total << ",Percentage:" << perc;
}

int main()
{
	student std;		
	
	std.getDetails();
	std.putDetails();
	
	return 0;
}