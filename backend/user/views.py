from .models import ApplicationForm,MainSlotBooking,SecondarySlotBooking,CompanyLogo
from rest_framework import viewsets
from .serializers import ApplicationFormSerializer, UserSerializer,MainSlotBookingSerializer,SecondarySlotBookingSerializer,CompanyLogoSerializer
from django.contrib.auth.models import User
from rest_framework.parsers import MultiPartParser, FormParser



 

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ApplicationFormViewSet(viewsets.ModelViewSet):
    queryset = ApplicationForm.objects.all()
    serializer_class = ApplicationFormSerializer
    

class MainSlotBookingViewSet(viewsets.ModelViewSet):
    queryset = MainSlotBooking.objects.all()
    serializer_class = MainSlotBookingSerializer


class SecondarySlotBookingViewSet(viewsets.ModelViewSet):
    queryset = SecondarySlotBooking.objects.all()
    serializer_class = SecondarySlotBookingSerializer


class CompanyLogoViewSet(viewsets.ModelViewSet):
    queryset = CompanyLogo.objects.all()
    serializer_class = CompanyLogoSerializer
    parser_classes = (MultiPartParser, FormParser)