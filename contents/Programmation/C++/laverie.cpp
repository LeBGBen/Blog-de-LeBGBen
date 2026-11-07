#include <iostream>
int main()
{
    double poids_linge { 0.0 };
    std::cout << "Entrez le poids du linge en kg : ";
    std::cin >> poids_linge;
    while (poids_linge == 0.0)
    {
        std::cout << "Le poids du linge ne peut pas être nul. Réessayez : ";
        std::cin >> poids_linge;
    }
    if (poids_linge >= 25.0)
    {
        std::cout << "Dites donc, vous avez beaucoup de linge !" << std::endl;
    }
    else if (poids_linge < 0.5)
    {
        std::cout << "Vous avez très peu de linge, vous pourriez laver à la main !" << std::endl;
    }
    int g_machine { 0 };// nombre de grandes machines
    int p_machine { 0 };// nombre de petites machines
    while (poids_linge > 10.0)
    {
        g_machine++;
        poids_linge -= 10.0;
    }
    if (poids_linge > 5.0)
    {
        g_machine++;
        poids_linge -= 5.0;
    }
    else
    {
        p_machine++;
    }
    std::cout << "Nombre de grandes machines (10kg) nécessaires : " << g_machine << std::endl;
    std::cout << "Nombre de petites machines (5kg) nécessaires : " << p_machine << std::endl;
    return 0;
}