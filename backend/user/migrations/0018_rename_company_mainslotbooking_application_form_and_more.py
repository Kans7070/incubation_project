# Generated by Django 4.0.3 on 2022-04-05 05:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0017_remove_applicationform_company_logo'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mainslotbooking',
            old_name='company',
            new_name='application_form',
        ),
        migrations.RenameField(
            model_name='secondaryslotbooking',
            old_name='company',
            new_name='application_form',
        ),
        migrations.CreateModel(
            name='CompanyLogo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_logo', models.ImageField(blank=True, null=True, upload_to='')),
                ('application_form', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='user.applicationform')),
            ],
        ),
    ]
