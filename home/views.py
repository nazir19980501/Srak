from django.shortcuts import render, get_object_or_404, redirect
from .models import University, Application
from django.core.mail import send_mail
from .forms import ApplicationForm


def homeViwe(request):
    universities = University.objects.all()
    return render(request,'home/home.html', {
        "universities": universities
    })






def apply_view(request, university_id):
    university = get_object_or_404(
        University,
        id=university_id
    )

    if request.method == 'POST':
        form = ApplicationForm(request.POST)

        if form.is_valid():
            data = form.cleaned_data

            # Save to database
            Application.objects.create(
                university=university,
                first_name=data['first_name'],
                last_name=data['last_name'],
                age=data['age'],
                email=data['email'],
                phone_number=data['phone_number'],
            )

            # Send email
            send_mail(
                subject='New University Application',
                message=f"""
                        University: {university.name}

                        First Name: {data['first_name']}
                        Last Name: {data['last_name']}
                        Age: {data['age']}
                        Email: {data['email']}
                        Phone Number: {data['phone_number']}
                """,
                from_email=None,
                recipient_list=['nazirsherzad12345@gmail.com'],
                fail_silently=False,
            )

            return redirect('home')

    else:
        form = ApplicationForm()

    return render(request, 'home/apply.html', {
        'form': form,
        'university': university,
    })


def university_detail(request, pk):
    university = get_object_or_404(
        University,
        pk=pk
    )

    return render(
        request,
        'home/university_detail.html',
        {
            'university': university,
        }
    )